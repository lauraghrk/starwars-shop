import { useFormik } from 'formik'
import Button from '@mui/material/Button';
import { Box, Container, TextField } from '@mui/material';
import schema from '../schemas/schema';

function CheckoutForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            cpfcnpj: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log('enviado')
            console.log(values)
        }
    })

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
            </div>
            <div>
                <h4>Pagamento</h4>

            </div>
            <Button variant='contained' type="submit">Confirmar</Button>
        </Box>
    )
}

export default CheckoutForm