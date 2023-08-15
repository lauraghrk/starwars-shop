import { object, string} from 'yup'

const phoneRegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
const cpfcnpjRegExp = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
const cepRegExp = /\d{5}-\d{3}/
const valRegExp = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/

export default object().shape({
    name: string().min(3, 'Mínimo 3 caracteres.').required('Obrigatório'),
    email: string().email('E-mail inválido.').required('Obrigatório'),
    phone: string().matches(phoneRegExp, 'Telefone inválido').required('Obrigatório'),
    cpfcnpj: string().matches(cpfcnpjRegExp, 'CPF/CNPJ inválido').required('Obrigatório'),

    cep: string().matches(cepRegExp).required('Informe um CEP.'),

    paymentMethod: string().required('Selecione forma de pagamento.'),
    cardNumber: string().min(16, 'Número inválido').max(16, 'Número inválido'),
    val: string().matches(valRegExp, 'Data inválida.'),
    cardName: string().min(3, 'Mínimo 3 caracteres.'),
    cvv: string().min(3, 'Deve conter 3 dígitos.').max(3, 'Deve conter 3 dígitos.')
})