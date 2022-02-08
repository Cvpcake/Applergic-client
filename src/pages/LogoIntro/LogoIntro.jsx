import React from 'react';
import { Link } from 'react-router-dom';
import '../LogoIntro/LogoIntro.scss'

const LogoIntro = () => {
  return <div className="LogoContainer">
  <h1>
      <span>Applergic</span>
      
  </h1>
  <p>Mi guía alimentaria</p>
  <Link className="LinkLogo" to="/Intro"><img src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644319806/Applergic/logoApplergicFigurasGiro_3x_pkrurv.png" alt="imagen logo"/></Link>
  </div>;
};

export default LogoIntro;
