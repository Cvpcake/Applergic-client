import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "./Scanner.scss";

function Scanner({ mode }) {
  const [data, setData] = React.useState("Not Found");
  const [stopStream, setStopStream] = React.useState(true);

  const dismissQrReader = () => {
    setStopStream(!stopStream);
  };

  return (
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
        <BarcodeScannerComponent 
          width={250}
          height={250}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("Not Found");
          }}
          stopStream={stopStream}
        />
      ) : mode === 1 ? (
        <img className="img-default1"
          src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644422727/Applergic/codigoDeBarrasProducto_2x_vsvhbz.png"
          alt="Imagen predeterminada Codigo de barras"
        />
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

      <button onClick={dismissQrReader}>Empezar escaneo</button>

      <p className="p4">{data}</p>
    </div>
  );
}

export default Scanner;
