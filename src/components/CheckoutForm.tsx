import { Field, Formik, FormikErrors } from 'formik'
import { useState } from 'react'
import schema from '../schemas/schema'
import '../styles/styles.css'

const CheckoutForm = () => {
    function onBlurCep(ev: React.FocusEvent<HTMLInputElement>, setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<{
        cep: string;
    }>>) {
        const value = ev.target.value
        const cep = value?.replace(/[^0-9]/, '')

        if (cep?.length !== 8) return

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setFieldValue('logradouro', data.logradouro)
                setFieldValue('neighborhood', data.bairro)
                setFieldValue('city', data.localidade)
                setFieldValue('uf', data.uf)
            })
    }

    const [paymentMethod, setPaymentMethod] = useState('')
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentMethod((ev.target as HTMLInputElement).value)
    }

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                cpfcnpj: '',
                cep: '',
                logradouro: '',
                neighborhood: '',
                city: '',
                uf: '',
                paymentMethod: '',
                cardNumber: '',
                val: '',
                cardName: '',
                cvv: ''
            }}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
              }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <h4>Informações pessoais</h4>
                        <label className="form-label">Nome</label>
                        <Field type='text' name='name' className='form-control' />
                        <label className="form-label">Email</label>
                        <Field type='text' name='email' className='form-control' />
                        <label className="form-label">Telefone</label>
                        <Field type='text' name='phone' className='form-control' />
                        <label className="form-label">CPF/CNPJ</label>
                        <Field type='text' name='cpfcnpj' className='form-control' />
                    </div>
                    <div>
                        <h4>Endereço</h4>
                        <label className="form-label">CEP</label>
                        <Field name="cep" type="text" className='form-control' onBlur={(ev: React.FocusEvent<HTMLInputElement>) => onBlurCep(ev, props.setFieldValue)} />
                        <label className="form-label">Logradouro</label>
                        <Field name="logradouro" type="text" className='form-control' />
                        <label className="form-label">Número</label>
                        <Field name="number" type="text" className='form-control' />
                        <label className="form-label">Bairro</label>
                        <Field name="neighborhood" type="text" className='form-control' />
                        <label className="form-label">Cidade</label>
                        <Field name="city" type="text" className='form-control' />
                        <label className="form-label">Estado</label>
                        <Field name="uf" type="text" className='form-control' />
                    </div>
                    <div>
                        <h4>Pagamento</h4>
                        <Field name="paymentMethod" className="form-select" as="select" onChange={handleChange} value={paymentMethod}>
                            <option value="boleto">Boleto</option>
                            <option value="creditCard">Cartão de crédito</option>
                        </Field>
                        {paymentMethod == 'creditCard' && (
                            <div>
                                <label className="form-label">Número do cartão</label>
                                <Field type='text' name='cardNumber' className='form-control' />
                                <label className="form-label">Validade (MM/AA)</label>
                                <Field type='text' name='val' className='form-control' />
                                <label className="form-label">Nome do titular</label>
                                <Field type='text' name='cardName' className='form-control' />
                                <label className="form-label">Código de segurança</label>
                                <Field type='text' name='cvv' className='form-control' />
                            </div>
                        )}
                    </div>
                    <button type="submit" className='btn btn-secondary'>Confirmar</button>
                </form>
            )}
        </Formik>
    )
}
export default CheckoutForm 