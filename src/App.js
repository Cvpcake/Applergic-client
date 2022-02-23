import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro.jsx";
import Register from "./pages/Register/Register.jsx";
import LogoIntro from "./pages/LogoIntro/LogoIntro.jsx";
import { JwtContext } from "./shared/contexts/JwtContext";
import { UserContext } from "./shared/contexts/UserContext";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Buscador from "./pages/Buscador/Buscador.jsx";
import Emergencias from "./pages/Emergencias/Emergencias.jsx";
import Escanear from "./pages/Escanear/Escanear.jsx";
import Results from "./pages/Results/Results";
import FinalRegistro from "./pages/FinalRegistro/FinalRegistro.jsx";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <UserContext.Provider value={{ user, setUser}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogoIntro />} />
            <Route path="/Intro" element={<Intro />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          {jwt && <Route path="/Home" element={<Home />} />}
          {jwt && <Route path="/Home/Escanear" element={<Escanear />} />}
          {jwt && <Route path="/Home/Buscador" element={<Buscador />} />}
          {jwt && <Route path="/Home/Emergencias" element={<Emergencias />} />}
          {jwt && <Route path="/Home/Results" element={<Results />} />}
           <Route path="/Home/FinalRegistro" element={<FinalRegistro />} />
          </Routes>
        </BrowserRouter>
      </div>
      </UserContext.Provider>
    </JwtContext.Provider>
  );
}

export default App;
