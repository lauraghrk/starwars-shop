import { Link } from "react-router-dom"

function Success() {
    return (
        <div className="container" style={{marginTop: 30}}>
            <h3>Compra realizada com sucesso!</h3>
            <Link className="btn btn-secondary" style={{ marginTop: 30 }} to={"/"}>Voltar à página inicial</Link>
        </div>
    )
}
export default Success