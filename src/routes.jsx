import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial.jsx";
import Turmas from "./pages/Turmas/Turmas.jsx";
import Turmas2 from "./pages/Turmas/Turmas2.jsx";
import Turmas3 from "./pages/Turmas/Turmas3.jsx";
import Turmas4 from "./pages/Turmas/Turmas4.jsx";
import Turmas5 from "./pages/Turmas/Turmas5.jsx";
import Turmas6 from "./pages/Turmas/Turmas6.jsx";
import Aluno from "./pages/Aluno/Aluno.jsx";
import BasicExample from './Componentes/Navbar.jsx'
import BasicExample2 from './Componentes/Navba2.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function MainRoutes() {
    return (
        < Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/Navbar" element={<BasicExample />}></Route>
            <Route path="/Navba2" element={<BasicExample2 />}></Route>
            <Route path="/PaginaInicial" element={<PaginaInicial/>}></Route>
            <Route path="/Turmas" element={<Turmas />}></Route>
            <Route path="/Aluno" element={<Aluno />}></Route>
            <Route path="/turmas2" element={<Turmas2 />}/>
            <Route path="/turmas3" element={<Turmas3 />}/>
            <Route path="/turmas4" element={<Turmas4 />}/>
            <Route path="/turmas5" element={<Turmas5 />}/>
            <Route path="/turmas6" element={<Turmas6 />}/>
            
        </Routes>
    )
}
export default MainRoutes;