import { Routes, Route } from "react-router-dom";
//Importar Home
import { Home } from "../Home/Home.js"
//Importar Menu
import { Menu } from "../Menu/Menu.js"

export function Rutas(){
    return (
        <div className="App">
            {/* <Menu></Menu> */}
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}