import Container from '@mui/material/Container/Container'
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
        return <div>Loading vehicles...</div>
    }

     return (
        <Container maxWidth='md'>
            <div>
                {vehicles.map((vehicle: IVehicle) => <ListItem key={vehicle.url} name={vehicle.name} url={vehicle.url} vehicle={vehicle} />)}
            </div>
        </Container>
    )
})

export default Home