import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import "./ResultsComp.scss";

const Results = ({ data, dismissQrReader }) => {
  const [productFound, setProductFound] = useState({});
  const [barcodes, setBarcodes] = useState([]);
  let found = false;
 
  useEffect(() => {

   
    if (data.length > 0) {
      getAllProducts();
      getProducts();
      dismissQrReader();
      compare();
      
     }
  }, [data]);

  const compare = () => {
    console.log('he entrado en comapre');
   console.log(barcodes);
    for (let index = 0; index < barcodes.length; index++) {
      console.log(data);
      if (data === barcodes[index]) {
          found = true;
          console.log('He encontrado el barcode')
            } else {
          found = false;
          console.log('NO he encontrado el barcode')
      }
    }
  };

  const getProducts = () => {
    axios(`http://localhost:5000/api/products/${data}`).then((res) => {
      setProductFound(res.data);
    });
  };

  const getAllProducts = () => {
    axios(`http://localhost:5000/api/products/`).then((res) => {
      const barcodesSearch = [];
        res.data.map((product) => {
          return setBarcodes([...barcodes], product.barcode);
      });
      
    });
  if(barcodes.length > 0) {
    console.log(barcodes, 'esta es la nueva variable de estado');}
  };


  return (
    <div>
       { found === false ?
        <div className="result-container">
          <h2 className="result-container__title">Aqui tienes el resultado</h2>
          <div className="result-container__imgContainer">
            <img
              className="result-container__img"
              src="https://sipp-pinturerias.com.ar/img/404.png"
              alt="product not found"
            />
          </div>
          <p>
            Lo sentimos, no hay datos suficientes para poder valorar este
            producto.
          </p>
        </div>
        :
      <div className="result-container">
        <h2 className="result-container__title">Aqui tienes el resultado</h2>
        <div className="result-container__imgContainer">
          <img
            className="result-container__img"
            src={productFound.image}
            alt={productFound.name}
          />
        </div>
        <h3>{productFound.name}</h3>
        <h4>{productFound.brand}</h4>
        <p>{productFound.description}</p>
      </div>
          }
    </div>
  );
};

export default Results;
