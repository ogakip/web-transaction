import * as Styled from "./styles";
import { TextField, Select, MenuItem } from "@mui/material";

export const FormTransaction = () => {
  const maxPortion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Styled.Container>
      <h2>Simule sua Antecipação</h2>
      <div className="input-field">
        <label>Informe o valor da venda *</label>
        <TextField
          InputProps={{
            startAdornment: <span className="input-icon">R$</span>,
          }}
          type="number"
        />
      </div>
      <div className="input-field">
        <label>Em quantas parcelas *</label>
        <Select defaultValue={1}>
          {maxPortion.map((portion) => (
            <MenuItem value={portion}>{portion}x</MenuItem>
          ))}
        </Select>
      </div>
      <div className="input-field">
        <label>Informe o percentual de MDR *</label>
        <TextField type="number" />
      </div>
    </Styled.Container>
  );
};
