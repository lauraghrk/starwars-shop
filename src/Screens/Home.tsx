import { useEffect, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { IVehicle } from '../interfaces/IVehicle'
import {VehicleStoreContext} from '../stores/VehicleStore'
import ListItem from '../components/ListItem'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

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
        <Container>
            <ListGroup>
                {vehicles.map((vehicle: IVehicle) => <ListItem key={vehicle.url} name={vehicle.name} url={vehicle.url} vehicle={vehicle} />)}
            </ListGroup>
        </Container>
    )
})

export default Home