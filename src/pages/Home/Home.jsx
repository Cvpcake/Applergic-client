import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Home.scss';
import { DropdownBtn }  from '../../componets/DropdownBtn/DropdownBtn';

const Home = () => {
  return (
    <div className="home-container">
      <DropdownBtn />
      <img className="applergiclogo" src="./images/applergicLogo.png" alt="logo" />
      <div className="btn-container__homies">
     <Link className="QR" to='/Home/Escanear'><button className="escanear"><img src="./images/scanner.png" className="img-btn" alt="scan" /><p className="btn-home__p">Escanear</p></button></Link> 
      <p className="home-p__text">Escanea un nuevo producto</p>
      <Link className="Buscador" to='/Home/Buscador'><button className="buscar"><img src="./images/lupa.png" className="img-btn" alt="lupa" /><p className="btn-home__p">Buscar</p></button></Link>
      <p className="home-p__text">Busca un comercio o restaurante para ti</p>
     <Link className="Emergencias" to='/Home/Emergencias'> <button className="emergencias"><img src="./images/sos.png" className="img-btn" alt="sos" /><p className="btn-home__p">S.O.S</p></button></Link>
      <p className="home-p__text">¿Necesitas ayuda urgente? contactamos con emergencias</p>
      </div>
    </div>
  );
};

export default Home;
