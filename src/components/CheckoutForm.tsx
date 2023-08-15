import { useFormik } from 'formik'
import Button from '@mui/material/Button/Button'
import { Box, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
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
        onSubmit: () => {
            console.log('enviado')
        }
    })

    const [paymentMethod, setPaymentMethod] = useState('')
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentMethod((ev.target as HTMLInputElement).value)
    }

    function onBlurCep(ev: React.FocusEvent<HTMLInputElement>) {
        const value = ev.target.value
        const cep = value?.replace(/[^0-9]/, '')

        if (cep?.length !== 8) return

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            
        })
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
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    margin='dense'
                    name='email'
                    label='E-mail'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    margin='dense'
                    name='phone'
                    label='Telefone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    placeholder='(00) 00000-0000'
                />
                <TextField
                    margin='dense'
                    name='cpfcnpj'
                    label='CPF/CNPJ'
                    value={formik.values.cpfcnpj}
                    onChange={formik.handleChange}
                    error={formik.touched.cpfcnpj && Boolean(formik.errors.cpfcnpj)}
                    helperText={formik.touched.cpfcnpj && formik.errors.cpfcnpj}
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
                    onBlur={onBlurCep}
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
                            value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                        />
                        <TextField
                            margin='dense'
                            name='val'
                            label='Validade'
                            placeholder='MM/AA'
                            value={formik.values.val}
                            onChange={formik.handleChange}
                            error={formik.touched.val && Boolean(formik.errors.val)}
                            helperText={formik.touched.val && formik.errors.val}
                        />
                        <TextField
                            margin='dense'
                            name='cardName'
                            label='Nome impresso no cartão'
                            value={formik.values.cardName}
                            onChange={formik.handleChange}
                            error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                            helperText={formik.touched.cardName && formik.errors.cardName}
                        />
                        <TextField
                            margin='dense'
                            name='cvv'
                            label='CVV'
                            value={formik.values.cvv}
                            onChange={formik.handleChange}
                            error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                            helperText={formik.touched.cvv && formik.errors.cvv}
                        />
                    </div>
                )}
            </div>
            <Button variant='contained' type="submit">Confirmar</Button>
        </Box>
    )
}

export default CheckoutForm