import React from "react";
import { Link } from "react-router-dom";
import './Home.scss';
const Home = () => {
  return (
    <div className="home-container">
      <img src="logoHome" alt="" />
      <h1>Applergic</h1>
      <p>Mi guía alimentaria</p>
      <button>Escanear</button>
      <p>Escanea un nuevo producto</p>
      <button>Buscar</button>
      <p>Busca un comercio o restaurante para ti</p>
      <button>S.O.S</button>
      <p>¿Necesitas ayuda urgente? contactamos con emergencias</p>
    </div>
  );
};

export default Home;
