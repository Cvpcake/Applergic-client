import React, { useState } from "react";
import Scanner from "../../componets/Scanner/Scanner";
import "./Escanear.scss";

const Escanear = () => {
  const [showResults, setShowResults] = useState(1);

  return (
    <div className="escanear-container">
      
        {showResults === 1 ? (
          <div>
            <Scanner mode={showResults} />
            <div className="btn-container">
              <button className="custom-btn1" onClick={() => setShowResults(1)}>
                <img
                  src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644425286/Applergic/barcode2_2x_1_x3i6mw.png"
                  alt="Boton codigo de barras"
                />
              </button>
              <button className="custom-btn2" onClick={() => setShowResults(2)}>
                <img
                  src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644425286/Applergic/qr_2x_jyddfa.png"
                  alt="Boton QR"
                />
              </button>
              <button className="custom-btn3" onClick={() => setShowResults(3)}>
                <img
                  src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644425344/Applergic/nfc_2x_1_txjpee.png"
                  alt="Boton NFC"
                />
              </button>
            </div>
          </div>
        ) : showResults === 2 ? (
          <div>
            <Scanner mode={showResults} />
            <div className="btn-container">
              <button className="custom-btn1" onClick={() => setShowResults(1)}>
                <img
                  src="../images/barcodeBlack.png"
                  alt="Boton codigo de barras"
                />
              </button>
              <button className="custom-btn2" onClick={() => setShowResults(2)}>
                <img
                  src="../images/qr2.png"
                  alt="Boton QR"
                />
              </button>
              <button className="custom-btn3" onClick={() => setShowResults(3)}>
                <img
                  src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644425344/Applergic/nfc_2x_1_txjpee.png"
                  alt="Boton NFC"
                />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Scanner mode={showResults} />
            <div className="btn-container">
              <button className="custom-btn1" onClick={() => setShowResults(1)}>
                <img
                  src="../images/barcodeBlack.png"
                  alt="Boton codigo de barras"
                />
              </button>
              <button className="custom-btn2" onClick={() => setShowResults(2)}>
                <img
                  src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644425286/Applergic/qr_2x_jyddfa.png"
                  alt="Boton QR"
                />
              </button>
              <button className="custom-btn3" onClick={() => setShowResults(3)}>
                <img
                  src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644425344/Applergic/nfc_2x_1_txjpee.png"
                  alt="Boton NFC"
                />
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Escanear;
