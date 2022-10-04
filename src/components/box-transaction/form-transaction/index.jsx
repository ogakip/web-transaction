import { api } from "../../../services/api";
import * as Styled from "./styles";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { transactionValidation } from "../../../validations/transaction";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { TiDelete } from "react-icons/ti";

export const FormTransaction = () => {
  const maxPortion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [days, setDays] = useState([]);
  const [currentDay, setCurrentDay] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(transactionValidation),
  });

  const getFormData = (data) => {
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
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const handleDay = (day) => {
    if (!days.includes(day)) {
      setDays([...days, day]);
    } else {
      toast.warn("Esse dia já foi adicionado a lista")
    }
  };

  const handleRemoveDay = (deletedIndex, type) => {
    if (type === "partial") {
      setDays(days.filter((day, index) => index !== deletedIndex));
    } else if (type === "full") {
      setDays([])
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
            {maxPortion.map((portion) => (
              <MenuItem value={portion}>{portion}x</MenuItem>
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
          {days?.length > 0 && (
            <div className="list-days">
              {days.map((day, index) => (
                <div>
                  <span onClick={() => handleRemoveDay(index, "partial")}>
                    <TiDelete size="17px" />
                  </span>
                  {day}
                </div>
              ))}
              <Button onClick={() => handleRemoveDay(1, "full")}>Remover todos</Button>
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
