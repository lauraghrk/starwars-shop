import { Link } from "react-router-dom"
import { IVehicle } from "../interfaces/IVehicle"

function ListItem(vehicle: IVehicle) {
    return (
        <div>
            <Link to={'/checkout/' + vehicle.name}>
                <div>
                    {vehicle.name}
                </div>
            </Link>
        </div>
    )
}

export default ListItem