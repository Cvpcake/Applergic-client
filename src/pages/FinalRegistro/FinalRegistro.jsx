import React from "react";
import './FinalRegistro.scss';
import { Link } from 'react-router-dom';

const FinalRegistro = () => {
  return (
    <div>
      <div className="HeaderContainer">
      
        <p className="P50">4 de 4</p>
        <Link className="LinkVolver56" to="/Login">X</Link>
      </div>
      <div className="DivImg">
        <img
          className="OK"
          src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644319812/Applergic/ok_3x_gfwpbn.png"
          alt="imagen dedos"
        />
        <div className="Titulo123">
            <h2 className="H1Terminado">
                Hemos terminado, ya 
                puedes escanear tu primer 
                producto.
            </h2>
            <div className="DIVbottomESCAm">
            <Link className="Link1562" to="/Home/Escanear">Escanea un producto</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FinalRegistro;