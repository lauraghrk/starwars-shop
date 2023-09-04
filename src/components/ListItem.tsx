import { Link } from "react-router-dom"
import { IVehicle } from "../interfaces/IVehicle"

function ListItem(vehicle: IVehicle) {
    return (
        <div>
            <Link to={'/checkout/' + vehicle.name} className="list-group-item list-group-item-action list-group-item-light">
                <div>
                    {vehicle.name}
                </div>
            </Link>
        </div>
    )
}

export default ListItem