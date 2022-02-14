import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Home } from "./pages/home/Home";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/vendedores" element={<Home/>} />
                <Route path="/clientes" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}