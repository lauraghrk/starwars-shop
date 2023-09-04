import { useEffect, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { IVehicle } from '../interfaces/IVehicle'
import {VehicleStoreContext} from '../stores/VehicleStore'
import ListItem from '../components/ListItem'

const Home = observer(() => {

    const store = useContext(VehicleStoreContext)
    const { vehicles } = store

    useEffect(() => {
       store.fetchVehicles()
    }, [])

    if (store.loading) {
        return <div>Carregando veículos...</div>
    }

     return (
        <div>
            <div>
                {vehicles.map((vehicle: IVehicle) => <ListItem key={vehicle.url} name={vehicle.name} url={vehicle.url} vehicle={vehicle} />)}
            </div>
        </div>
    )
})

export default Home