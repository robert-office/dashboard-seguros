import { BrowserRouter, Routes, Route } from "react-router-dom";
import { My404 } from "./pages/404";
import { Adm } from "./pages/administradores/Adm";
import { Cli } from "./pages/clientes/Cli";
import { Conf } from "./pages/configuracoes/Conf";
import { Dev } from "./pages/desenvolvedores/Dev";
import { Edit } from "./pages/edit";
import { Home } from "./pages/home/Home";
import { Segu } from "./pages/seguros/Segu";
import { Telem } from "./pages/telemarketing/Telem";
import { Veic } from "./pages/veiculos/Veic";
import { Vende } from "./pages/vendedores/Vende";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/administradores" element={<Adm/>} />
                <Route path="/clientes" element={<Cli/>} />
                <Route path="/configuracoes" element={<Conf/>} />
                <Route path="/desenvolvedores" element={<Dev/>} />
                <Route path="/seguros" element={<Segu/>} />
                <Route path="/telemarketing" element={<Telem/>} />
                <Route path="/veiculos" element={<Veic/>} />
                <Route path="/vendedores" element={<Vende/>} />

                <Route path="/edit/:resource/:id" element={<Edit/>} />

                <Route path="/*" element={<My404/>} />
            </Routes>
        </BrowserRouter>
    )
}