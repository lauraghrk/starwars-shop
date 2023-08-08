import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {vehicleStore, VehicleStoreContext} from './stores/VehicleStore.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VehicleStoreContext.Provider value={vehicleStore}>
      <App />
    </VehicleStoreContext.Provider>
  </React.StrictMode>,
)
