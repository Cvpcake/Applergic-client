import "./App.css";
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro.jsx";
import Register from "./pages/Register/Register.jsx";
import LogoIntro from "./pages/LogoIntro/LogoIntro.jsx";
import { JwtContext } from "./shared/contexts/JwtContext"
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home';
import Buscador from './pages/Buscador/Buscador.jsx';
import Emergencias from './pages/Emergencias/Emergencias.jsx';
import Escanear from './pages/Escanear/Escanear.jsx';

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<LogoIntro />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/Escanear" element={<Escanear/>} />
          <Route path="/Home/Buscador" element={<Buscador/>} />
          <Route path="/Home/Emergencias" element={<Emergencias/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </JwtContext.Provider>
  );
}

export default App;
