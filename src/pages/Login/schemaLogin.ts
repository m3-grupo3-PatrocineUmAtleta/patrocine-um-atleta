import * as yup from "yup";

export const SchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("Campo e-mail obrigatório")
    .email("E-mail inválido"),
  password: yup.string().required("Campo senha obrigatório"),
});
