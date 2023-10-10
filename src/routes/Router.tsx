import { Route, Routes } from "react-router-dom"
import Home from "../Screens/Home"
import ErrorPage from "../Screens/ErrorPage"
import Checkout from "../Screens/Checkout"
import About from "../Screens/About"
import Success from "../Screens/Success"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout/:name" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router