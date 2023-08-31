import { Field, Formik, FormikErrors } from 'formik'
import schema from '../schemas/schema'
import { useState } from 'react'

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
            onSubmit={() => {
                console.log('enviado')
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <h4>Informações pessoais</h4>
                        <Field type='text' name='name' />
                        <Field type='text' name='email' />
                        <Field type='text' name='phone' />
                        <Field type='text' name='cpfcnpj' />
                    </div>
                    <div>
                        <h4>Endereço</h4>
                        <Field name="cep" type="text" onBlur={(ev: React.FocusEvent<HTMLInputElement>) => onBlurCep(ev, props.setFieldValue)} />
                        <Field name="logradouro" type="text" />
                        <Field name="neighborhood" type="text" />
                        <Field name="city" type="text" />
                        <Field name="uf" type="text" />
                    </div>
                    <div>
                        <h4>Pagamento</h4>
                        <Field name="paymentMethod" as="select" onChange={handleChange} value={paymentMethod}>
                            <option value="boleto">Boleto</option>
                            <option value="creditCard">Cartão de crédito</option>
                        </Field>
                        {paymentMethod == 'creditCard' && (
                            <div>
                                <Field type='text' name='cardNumber' />
                                <Field type='text' name='val' />
                                <Field type='text' name='cardName' />
                                <Field type='text' name='cvv' />
                            </div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    )
}

export default CheckoutForm 