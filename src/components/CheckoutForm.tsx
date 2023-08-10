import { Formik, Form } from 'formik'
import Button from '@mui/material/Button';
import { Container, TextField } from '@mui/material';
import schema from '../schemas/schema';

function CheckoutForm() {

    function onsubmit() {
        console.log("Enviado")
    }

    return (
        <Formik initialValues={{}} validationSchema={schema} onSubmit={onsubmit}>
            {() => (
                <Form>
                    <Container>
                        <h4>Informações pessoais</h4>
                        <TextField
                            margin='dense'
                            name='name'
                            label='Nome'
                        />
                        <TextField
                            margin='dense'
                            name='email'
                            label='E-mail'
                        />
                        <TextField
                            margin='dense'
                            name='phone'
                            label='Telefone'
                        />
                        <TextField
                            margin='dense'
                            name='cpf-cnpj'
                            label='CPF/CNPJ'
                        />
                    </Container>
                    <div>
                        <h4>Endereço</h4>
                    </div>
                    <div>
                        <h4>Pagamento</h4>

                    </div>
                    <Button variant='contained' type="submit">Confirmar</Button>
                </Form>
            )}
        </Formik>
    )
}

export default CheckoutForm