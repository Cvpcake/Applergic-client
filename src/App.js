import "./App.css";
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro.jsx";
import Register from "./pages/Register/Register.jsx";
import LogoIntro from "./pages/LogoIntro/LogoIntro.jsx";
import { JwtContext } from "./shared/contexts/JwtContext"
import Login from "./pages/Login/Login"

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
        </Routes>
      </BrowserRouter>
    </div>
    </JwtContext.Provider>
  );
}

export default App;
