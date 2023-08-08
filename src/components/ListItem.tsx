import { Link } from "react-router-dom"
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import { IVehicle } from "../interfaces/IVehicle"

function ListItem(vehicle: IVehicle) {
    return (
        <ListGroupItem>
            <Link to={'/checkout/' + vehicle.name}>
                <div>
                    {vehicle.name}
                </div>
            </Link>
        </ListGroupItem>
    )
}

export default ListItem