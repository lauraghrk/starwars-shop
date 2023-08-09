import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom"
import Router from './routes/Router'
import Navbar from './components/Navbar'
import Container from '@mui/material/Container/Container'


function App() {
  return (
    <BrowserRouter>
      <Navbar /><br />
      <Container>
        <Router />
      </Container>
    </BrowserRouter>
  )
}

export default App
