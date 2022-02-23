import React, {useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import ResultsComp from '../Results/ResultsComp';
import {Link} from 'react-router-dom';
import "./Scanner.scss";


function Scanner({ mode }) {
  const [data, setData] = useState("");
  const [stopStream, setStopStream] = useState(true);
  
  const dismissQrReader =  () => {
     setStopStream(!stopStream);
  };

  return (
    <div>
    <div className="backToHome-container">
    <Link to="/Home" ><button className="backToHome-container__btn">{/* <img src="../images/backtohome.png" alt="boton back to home"/> */}X</button></Link>
    </div>
    {data === "" ? (
    <div className="scanner-card">
      <h1 className="Escaneado">Escaneando...</h1>
      {mode === 1 ? (
        <p className="p1">
          Tan solo tienes que centrar el <span>código de barras</span> del producto en el
          recuadro.
        </p>
      ) : mode === 2 ? (
        <p className="p2">
          Tan solo tienes que centrar el código <span>QR</span> del producto en el recuadro.
        </p>
      ) : (
        <p className="p3">
          Tan solo tienes que aproximar tu movil al símbolo <span>NFC</span> de la etiqueta digital del
          producto.
        </p>
      )}
      {stopStream === false ? (
        <div className="scannerCamera-container">
        <BarcodeScannerComponent 
          width={293}
          height={204}
          onUpdate={(err, result) => { // OPTIONAL CHAINING: no se ejecuta si lo que hay despues de la interrogación es UNDEFINED
            (result?.text ? setData(result.text) : setData(''))
          }}
          stopStream={stopStream}
          
        />
        </div>
      ) : mode === 1 ? (
        <div className="imgDef1-container">
        <img className="img-default1"
          src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644422727/Applergic/codigoDeBarrasProducto_2x_vsvhbz.png"
          alt="Imagen predeterminada Codigo de barras"
        />
        </div>
      ) : mode === 2 ? (
        <img className="img-default2"
          src="https://images-ext-2.discordapp.net/external/ra8fUnbbHUZ37KVrGZwLvM9NgOYCJaoXoq78JYalJ5A/https/res.cloudinary.com/dvawsqdhx/image/upload/v1644422763/Applergic/qrVino_2x_cv6uxb.png"
          alt="Qr vino"
        />
      ) : (
        <img className="img-default3"
          src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644423023/Applergic/logo_NFC_ceho0q.png"
          alt="NFC logo"
        />
      )}

      <button className="stopReader"onClick={dismissQrReader}>Empezar escaneo</button>
    </div>
    ) : (
        <ResultsComp data={data} dismissQrReader={dismissQrReader}/>
      )}
    </div>
  );
}

export default Scanner;
