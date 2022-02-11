import React from "react";
import './FinalRegistro.scss';

const FinalRegistro = () => {
  return (
    <div>
      <div className="HeaderContainer">
        <p className="P40">{"<"} Volver </p>
        <p className="P50">4 de 4</p>
        <p className="P60">X</p>
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
                <button className="BottomSSCAM">Escanea un producto</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FinalRegistro;
