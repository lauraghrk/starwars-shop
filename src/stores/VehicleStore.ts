import { makeObservable, observable, action } from 'mobx'
import { IVehicle } from '../interfaces/IVehicle'
import { createContext } from 'react'

class VehicleStore {
    vehicles: IVehicle[] = []
    loading = false

    constructor() {
        makeObservable(this, {
            vehicles: observable,
            loading: observable,
            toggleLoading: action,
            setData: action
        })
    }

    async fetchVehicles() {
        this.toggleLoading()
        try {
            const response = await fetch("https://swapi.dev/api/vehicles")
            const data = await response.json()
            this.setData(data.results)
        } catch (error) {
            console.error("Error fetching data: ", error)
        } finally {
            this.toggleLoading()
        }
    }

    toggleLoading = () => {
        this.loading = !this.loading
    }

    setData = (data: IVehicle[]) => {
        this.vehicles = data
    }
}

export const vehicleStore = new VehicleStore()
export const VehicleStoreContext = createContext(vehicleStore)