import Container from "react-bootstrap/esm/Container"
import { useParams } from "react-router-dom"
import CheckoutForm from "../components/CheckoutForm"

function Checkout() {

    const {name} = useParams()
    return (
        <Container>
            <h2>Checkout</h2>
            <p><b>Item: </b>{name}</p>
            <CheckoutForm />
        </Container>
    )
}

export default Checkout

//Formulário checkout
//Props veículo