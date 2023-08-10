import { useParams } from "react-router-dom"
import CheckoutForm from "../components/CheckoutForm"

function Checkout() {

    const {name} = useParams()
    return (
        <div>
            <h2>Checkout</h2>
            <p><b>Item: </b>{name}</p>
            <CheckoutForm />
        </div>
    )
}

export default Checkout

//Props veículo
//Form endereço
//Form validações