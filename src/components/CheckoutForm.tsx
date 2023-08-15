import { useFormik } from 'formik'
import { Box, Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import schema from '../schemas/schema'
import { useState } from 'react'

function CheckoutForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            cpfcnpj: '',
            cep: '',

            paymentMethod: '',
            cardNumber: '',
            val: '',
            cardName: '',
            cvv: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log('enviado')
            console.log(values)
        }
    })

    const [paymentMethod, setPaymentMethod] = useState('')
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentMethod((ev.target as HTMLInputElement).value)
    }

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <div>
                <h4>Informações pessoais</h4>
                <TextField
                    margin='dense'
                    name='name'
                    label='Nome'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                />
                <TextField
                    margin='dense'
                    name='email'
                    label='E-mail'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                />
                <TextField
                    margin='dense'
                    name='phone'
                    label='Telefone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    placeholder='(00) 00000-0000'
                />
                <TextField
                    margin='dense'
                    name='cpfcnpj'
                    label='CPF/CNPJ'
                    value={formik.values.cpfcnpj}
                    onChange={formik.handleChange}
                    error={formik.touched.cpfcnpj && Boolean(formik.errors.cpfcnpj)}
                />
            </div>
            <div>
                <h4>Endereço</h4>
                <TextField 
                    margin='dense'
                    name='cep'
                    label='CEP'
                    value={formik.values.cep}
                    onChange={formik.handleChange}
                    error={formik.touched.cep && Boolean(formik.errors.cep)}
                /> <br />
                <TextField 
                    margin='dense'
                    name='logradouro'
                    label='Logradouro'
                />
                <TextField 
                    margin='dense'
                    name='number'
                    label='Número'
                />
                <TextField 
                    margin='dense'
                    name='complement'
                    label='Complemento'
                />
                <TextField 
                    margin='dense'
                    name='neighborhood'
                    label='Bairro'
                />
                <TextField 
                    margin='dense'
                    name='city'
                    label='Cidade'
                />
                <TextField 
                    margin='dense'
                    name='state'
                    label='UF'
                />
            </div>
            <div>
                <h4>Pagamento</h4>
                <RadioGroup row name='paymentMethod' onChange={handleChange} value={paymentMethod}>
                    <FormControlLabel value='boleto' control={<Radio />} label='Boleto' />
                    <FormControlLabel value='creditCard' control={<Radio />} label='Cartão de crédito' />
                </RadioGroup>
                {paymentMethod == 'creditCard' && (
                    <div>
                        <TextField
                            margin='dense'
                            name='cardNumber'
                            label='Número do cartão'
                        />
                        <TextField
                            margin='dense'
                            name='val'
                            label='Validade'
                        />
                        <TextField
                            margin='dense'
                            name='cardName'
                            label='Nome impresso no cartão'
                        />
                        <TextField
                            margin='dense'
                            name='cvv'
                            label='CVV'
                            type='number'
                        />
                    </div>
                )}
                
            </div>
            <Button variant='contained' type="submit">Confirmar</Button>
        </Box>
    )
}

export default CheckoutForm