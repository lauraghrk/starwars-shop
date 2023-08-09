import { Formik, Form, Field } from 'formik'
import Button from '@mui/material/Button';

function CheckoutForm() {

    function onsubmit() {
        console.log("Enviado")
    }

    return (
        <Formik initialValues={{}} onSubmit={onsubmit}>
            {() => (
                <Form>
                    <div>
                        <h4>Informações pessoais</h4>
                        <div>
                            <label>Nome: </label>
                            <Field name='name' type='text' />
                        </div>
                        <div>
                            <label>E-mail: </label>
                            <Field name='email' type='email' />
                        </div>
                        <div>
                            <label>Telefone: </label>
                            <Field name='email' type='email' />
                        </div>
                        <div>
                            <label>CPF/CNPJ: </label>
                            <Field name='email' type='email' />
                        </div>
                    </div>
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