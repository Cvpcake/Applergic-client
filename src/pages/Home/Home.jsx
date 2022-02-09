import React from "react";
import { Link } from "react-router-dom";
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <img src="logoHome" alt="" />
      <h1>Applergic</h1>
      <p>Mi guía alimentaria</p>
     <Link className="QR" to='/Home/Escanear'><button>Escanear</button></Link> 
      <p>Escanea un nuevo producto</p>
      <Link className="Buscador" to='/Home/Buscador'><button>Buscar</button></Link>
      <p>Busca un comercio o restaurante para ti</p>
     <Link className="Emergencias" to='/Home/Emergencias'> <button>S.O.S</button></Link>
      <p>¿Necesitas ayuda urgente? contactamos con emergencias</p>
    </div>
  );
};

export default Home;
