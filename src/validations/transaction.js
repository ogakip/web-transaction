import { object, number } from "yup";

export const transactionValidation = object()
  .shape({
    amount: number()
      .min(10, "O valor mínimo para uma transação é R$10.")
      .typeError("O valor da transação é obrigatório."),
    installments: number().required("O número de parcelas é obrigatório."),
    mdr: number()
      .min(1, "O valor mínimo para a tarifa MDR é 1%.")
      .typeError("A tarifa MDR é obrigatória."),
  })
  .noUnknown(true);
