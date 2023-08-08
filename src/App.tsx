import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom"
import Router from './routes/Router'
import BrandNavbar from './components/BrandNavbar'


function App() {
  return (
    <BrowserRouter>
      <BrandNavbar /><br />
      <Router />
    </BrowserRouter>
  )
}

export default App
