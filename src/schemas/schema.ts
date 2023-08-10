import { object, string, number} from 'yup'

const phoneRegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
const cpfcnpjRegExp = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

export default object().shape({
    name: string().min(3, 'Mínimo 3 caracteres.').required('Informe um nome.'),
    email: string().email('E-mail inválido.').required('Informe um e-mail.'),
    phone: string().matches(phoneRegExp, 'Telefone inválido'),
    cpfcnpj: string().matches(cpfcnpjRegExp, 'CPF/CNPJ inválido')
})