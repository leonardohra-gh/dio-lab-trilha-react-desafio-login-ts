import * as yup from "yup";

const msgErrorRequired = "Campo obrigatório";

export const loginSchema = yup.object({
    email: yup.string().email('E-mail inválido').required(msgErrorRequired),
    password: yup.string().min(6, "No mínimo 6 caracteres").required(msgErrorRequired),
})