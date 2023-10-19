import { Field, Form, Formik, FormikErrors } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const handlePayChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentMethod((ev.target as HTMLInputElement).value)
    }

    const navigate = useNavigate()
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
                number: '',
                city: '',
                uf: '',
                paymentMethod: 'boleto',
                cardNumber: '',
                val: '',
                cardName: '',
                cvv: ''
            }}
            validationSchema={schema}
            onSubmit={() => {
                console.log('enviado')
                navigate("/success")
              }}
        >
            {props => (
                <Form>
                    <div>
                        <h4>Informações pessoais</h4>
                        
                        <label htmlFor='name' className="form-label">Nome</label>
                        <Field type='text' name='name' id='name' className='form-control' />
                        {props.errors.name && props.touched.name ? (<div>{props.errors.name}</div>) : null}

                        <label htmlFor='email' className="form-label">Email</label>
                        <Field type='text' name='email' id='email' className='form-control' />
                        {props.errors.email && props.touched.email ? (<div>{props.errors.email}</div>) : null}

                        <label htmlFor='phone' className="form-label">Telefone</label>
                        <Field type='text' name='phone' id='phone' className='form-control' />
                        {props.errors.phone && props.touched.phone ? (<div>{props.errors.phone}</div>) : null}

                        <label htmlFor='cpfcnpj' className="form-label">CPF/CNPJ</label>
                        <Field type='text' name='cpfcnpj' id='cpfcnpj' className='form-control' />
                        {props.errors.cpfcnpj && props.touched.cpfcnpj ? (<div>{props.errors.cpfcnpj}</div>) : null}
                    </div>
                    <div>
                        <h4>Endereço</h4>
                        <label htmlFor='cep' className="form-label">CEP</label>
                        <Field name="cep" id='cep' type="text" className='form-control' onBlur={(ev: React.FocusEvent<HTMLInputElement>) => onBlurCep(ev, props.setFieldValue)} />
                        {props.errors.cep && props.touched.cep ? (<div>{props.errors.cep}</div>) : null}

                        <label htmlFor='logradouro' className="form-label">Logradouro</label>
                        <Field name="logradouro" id='logradouro' type="text" className='form-control' />
                        <label htmlFor='number' className="form-label">Número</label>
                        <Field name="number" id='number' type="text" className='form-control' />
                        <label htmlFor='neighborhood' className="form-label">Bairro</label>
                        <Field name="neighborhood" id='neighborhood' type="text" className='form-control' />
                        <label htmlFor='city' className="form-label">Cidade</label>
                        <Field name="city" id='city' type="text" className='form-control' />
                        <label htmlFor='uf' className="form-label">Estado</label>
                        <Field name="uf" id='uf' type="text" className='form-control' />
                    </div>
                    <div>
                        <h4>Pagamento</h4>
                        <Field name="paymentMethod" className="form-select" as="select" onChange={handlePayChange} value={paymentMethod}>
                            <option value="boleto">Boleto</option>
                            <option value="creditCard">Cartão de crédito</option>
                        </Field>
                        {paymentMethod == 'creditCard' && (
                            <div>
                                <label htmlFor='cardNumber' className="form-label">Número do cartão</label>
                                <Field type='text' name='cardNumber' id='cardNumber' className='form-control' />
                                <label htmlFor='val' className="form-label">Validade (MM/AA)</label>
                                <Field type='text' name='val' id='val' className='form-control' />
                                <label htmlFor='cardName' className="form-label">Nome do titular</label>
                                <Field type='text' name='cardName' id='cardName' className='form-control' />
                                <label htmlFor='cvv' className="form-label">Código de segurança</label>
                                <Field type='text' name='cvv' id='cvv' className='form-control' />
                            </div>
                        )}
                    </div>
                    <button type="submit" className='btn btn-secondary'>Confirmar</button>
                </Form>
            )}
        </Formik>
    )
}
export default CheckoutForm 