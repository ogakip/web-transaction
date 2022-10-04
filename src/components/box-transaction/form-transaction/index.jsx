import { api } from "../../../services/api";
import * as Styled from "./styles";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { transactionValidation } from "../../../validations/transaction";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { TiDelete } from "react-icons/ti";
import { Loading } from "../../loading";

export const FormTransaction = ({ setData }) => {
  const maxPortion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [days, setDays] = useState([]);
  const [currentDay, setCurrentDay] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [delayLoading, setDelayLoading] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(transactionValidation),
  });

  const handleWait = () => {
    toast.warn(`Isto está demorando mais do que o esperado! ${delayLoading}`);
  };

  useEffect(() => {
    console.log(delayLoading);
  }, [delayLoading]);

  const getFormData = (data) => {
    setIsLoading(true);
    if (isLoading) {
      setInterval(() => {
        setDelayLoading((delayLoading) => delayLoading + 1);
      }, 1);
    }
    if (delayLoading === 2000) {
      handleWait();
    }
    if (data) {
      if (days.length > 9) {
        toast.error("Não deve exceder 10 dias de recebimento")
      }
      api
        .post(
          "/",
          {
            ...data,
            amount: data.amount * 100,
            days: days.length > 0 ? days : [1, 15, 30, 90],
          },
          {
            headers: {
              "content-type": "application/json",
            },
            params: {
              delay: "1500",
            },
          }
        )
        .then((res) => {
          setIsLoading(false);
          toast.success("Simulação feita com sucesso");
          setData(res.data);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error)
          setIsLoading(false);
        });
    }
  };

  const handleDay = (day) => {
    if (!days.includes(day)) {
      setDays([...days, day]);
    } else {
      toast.warn("Esse dia já foi adicionado a lista");
    }
  };

  const handleRemoveDay = (deletedIndex, type) => {
    if (type === "partial") {
      setDays(days.filter((day, index) => index !== deletedIndex));
    } else if (type === "full") {
      setDays([]);
    }
  };

  useEffect(() => {
    const { amount, installments, mdr } = errors;
    const allErrors = [amount, installments, mdr];
    const filterErrors = allErrors.filter((error) => error !== undefined);
    filterErrors.map((error) => toast.error(`${error.message}`));
  }, [errors]);

  return (
    <Styled.Container>
      {isLoading && <Loading />}
      <h2>Simule sua Antecipação</h2>
      <Styled.Form onSubmit={handleSubmit(getFormData)}>
        <div className="input-field">
          <label>Informe o valor da venda *</label>
          <TextField
            defaultValue={1}
            {...register("amount")}
            InputProps={{
              startAdornment: <span className="input-icon">R$</span>,
            }}
          />
        </div>

        <div className="input-field">
          <label>Em quantas parcelas *</label>
          <Select {...register("installments")} defaultValue={1}>
            {maxPortion.map((portion, index) => (
              <MenuItem key={index} value={portion}>
                {portion}x
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="input-field">
          <label>Informe o percentual de MDR *</label>
          <TextField
            defaultValue={1}
            {...register("mdr")}
            InputProps={{
              startAdornment: <span className="input-icon">%</span>,
            }}
          />
        </div>

        <div className="input-field">
          <label>Selecionar dias de recebimento</label>
          <div>
            <TextField
              defaultValue={null}
              type="number"
              onChange={(event) => setCurrentDay(event.target.value)}
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={() => handleDay(currentDay)}
                    className="input-button"
                  >
                    Adicionar
                  </Button>
                ),
              }}
            />
            <span className="input-obs">Max: 10 dias</span>
          </div>
          {days?.length > 0 && (
            <div className="list-days">
              {days.map((day, index) => (
                <div key={index}>
                  <span onClick={() => handleRemoveDay(index, "partial")}>
                    <TiDelete size="17px" />
                  </span>
                  {day}
                </div>
              ))}
              <Button onClick={() => handleRemoveDay(1, "full")}>
                Remover todos
              </Button>
            </div>
          )}
        </div>

        <Button type="submit" variant="outlined">
          Realizar simulação
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
};
