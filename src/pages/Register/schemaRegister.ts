import * as yup from "yup";

export const SchemaRegister = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório!"),
  cpf: yup
    .number()
    .required("Este campo é obrigatótio!")
    .integer("Somente números"),
  age: yup.string().required("Este campo é obrigatótio!"),
  street: yup.string().required("Este campo é obrigatótio!"),
  address: yup.string().required("Este campo é obrigatório!"),
  cep: yup.number().required("Este campo é obrigatório!"),
  image: yup.string(),
  bio: yup.string(),
  phoneNumber: yup.mixed().required("Este campo é obrigatório!"),
  email: yup
    .string()
    .required("Campo e-mail obrigatório")
    .email("E-mail inválido"),
  password: yup
    .string()
    .required("Este campo é obrigatório")
    .min(6, "A senha precisa conter pelo menos 6 caracteres!")
    .matches(/(?=.*?[A-Z])/, "A senha precisa conter um letra maiúscula")
    .matches(/(?=.*?[a-z])/, "A senha precisa conter um letra minúscula")
    .matches(/(?=.*?[0-9])/, "A senha precisa um números")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha precisa conter pelo menos um caracter especial"
    ),
  confirmPassword: yup
    .string()
    .required("Este campo é obrigatório")
    .oneOf([yup.ref("password")], "As senhas não coincidem!"),
});
