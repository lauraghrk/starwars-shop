import { object, string, number} from 'yup'

export default object().shape({
    name: string().min(3, 'Mínimo 3 caracteres.').required('Informe um nome.'),
    email: string().email("Informe um e-mail válido.").required('Informe um e-mail.'),
    phone: number().min(10).max(11)
})