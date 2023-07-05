const types = {
  cpf: {
    regex:
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
    message: "Insira um cpf válido",
  },
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: "Insira um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres",
  },
  currency: {
    regex: /^[0-9]\d{0,2}(\.\d{3})*\.\d{2}$/,
    message: "Utilize apenas numeros que sigam padrão monetario",
  },
  number: {
    regex: /^[0-9]+$/,
    message: "Utilize apenas números",
  },
  tel: {
    regex: /^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
    message: "Insira um número de telefone válido",
  },
  date: {
    regex: /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/,
    message: "Insira uma data válida",
  },
  boolean: {
    regex: /^true|false$/,
    message: "Insira um valor correto",
  },
  role: {
    regex: /(admin|user)/,
    message: "Insira um valor válido",
  },
}

interface IValidateProps {
  data: { [key: string]: string }
  type?: keyof typeof types | false
  isRequired?: boolean
}

export const validate = ({ data, type, isRequired }: IValidateProps) => {
  const field = Object.keys(data)[0].toLowerCase()
  const value = Object.values(data)[0]

  if (type === false) return true

  if (!value && isRequired === true) {
    throw new Error(`O campo ${field} é obrigatório`)
  }

  if (type && types[type] && !types[type].regex.test(value)) {
    throw new Error(`${types[type].message} no campo ${field}`)
  }

  return true
}
