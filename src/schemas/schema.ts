import { object, string} from 'yup'

const phoneRegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
const cpfcnpjRegExp = /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
const cepRegExp = /\d{5}-?\d{3}/
const valRegExp = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/

export default object({
    name: string()
        .min(3, 'Mínimo 3 caracteres.')
        .required('Nome deve ser preenchido.'),
    email: string()
        .email('E-mail inválido.')
        .required('E-mail deve ser preenchido.'),
    phone: string()
        .matches(phoneRegExp, 'Telefone inválido')
        .required('Telefone deve ser preenchido.'),
    cpfcnpj: string()
        .matches(cpfcnpjRegExp, 'CPF/CNPJ inválido')
        .required('CPF/CNPJ deve ser preenchido.'),

    cep: string()
        .matches(cepRegExp, 'CEP inválido.')
        .required('Informe um CEP.')
})