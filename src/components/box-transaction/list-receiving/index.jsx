import { useEffect, useState } from "react";
import * as Styled from "./styles";
import empty from "../../../assets/img/empty.svg";

export const ListReceiving = ({ data }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    let arrayOfValues = [];
    for (const key in data) {
      arrayOfValues.push([key, data[key]]);
    }
    setValues(arrayOfValues);
  }, [data]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <Styled.Container>
      <div>
        <h2>Você receberá:</h2>
        <hr />
      </div>
      <Styled.List>
        {values.length === 0 ? (
          <div className="empty-list">
            <span>Você ainda não realizou uma solicitação</span>
            <img src={empty} alt="imagem de ilustração lista vazia" />
          </div>
        ) : (
          <>
            {values.map((value, index) => {
              const key = Number(value[0]);

              return (
                <li key={index}>
                  {key > 1 ? <>Em {key} dias:</> : <>Amanhã:</>} R$
                  {value[1] / 100}
                </li>
              );
            })}
          </>
        )}
      </Styled.List>
    </Styled.Container>
  );
};
