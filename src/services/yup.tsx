import * as yup from "yup"

export const Schema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Insira um valor")
    .required("Campo obrigatório")
    .min(1000, "Valor precisa ser maior ou igual a 1000"),
  installments: yup
    .number()
    .typeError("Insira um valor")
    .required("Campo obrigatório")
    .max(12, "Número de parcelas não pode ultrapassar 12 vezes"),
  mdr: yup
    .number()
    .typeError("Insira um valor")
    .required("Campo obrigatório")
    .max(100, "Parcela de juros precisa ser menor ou igual a 100"),
})
