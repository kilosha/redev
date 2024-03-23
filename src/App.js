import { Route, Routes, Link, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import DontExistPage from "./pages/DontExistPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useState } from "react";

function App() {
    const [header, setHeader] = useState("test");


    return (
        <div className="App">
            <h1>Header: {header}</h1>
            <button onClick={() => setHeader("aaaa")}>Set header</button>
            <br />
            <Link to="/masha">Contacts</Link>
            <br />
            <Link to="/test">About</Link>

            <div>
                <h2>Navlinks</h2>
                <NavLink to="/" activeClassName="active">Главная</NavLink> <br />
                <NavLink to="/masha" activeClassName="active">Contacts</NavLink> <br />
                <NavLink to="/test" activeClassName="active">About</NavLink> <br />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/masha" element={<Contacts />} />
                <Route path="/test" element={<About />} />
                <Route path="product/:id" element={<ProductDetailPage />} />
                <Route path="*" element={<DontExistPage />} />
            </Routes>
        </div>
    );
}

export default App;
