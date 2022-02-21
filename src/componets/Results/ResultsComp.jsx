import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ResultsComp.scss";

const Results = ({ data, dismissQrReader }) => {
  const [productFound, setProductFound] = useState({});
  const [match, setMatch] = useState(0);
  

  useEffect(() => {
    getProducts();
    dismissQrReader();
  }, [data]);


  const getProducts = async () => {
    try {
      await axios(`http://localhost:5000/api/products/${data}`).then((res) => {
        setMatch(1);
        setProductFound(res.data);
      });
    } catch (error) {
      setMatch(0);
      console.log(error);
    }
  };

  return (
    <div>
      {match === 0 ? (
        <div className="result-container">
          <h2 className="result-container__title">Aqui tienes el resultado</h2>
          <p className="result-container__text">
            Lo sentimos, no hay datos suficientes para poder valorar este
            producto.
          </p>
          <div className="result-container__imgContainer">
            <img
              className="result-container__img"
              src="https://sipp-pinturerias.com.ar/img/404.png"
              alt="product not found"
            />
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h2 className="result-container__title">Aqui tienes el resultado</h2>
          <p className="result-container__text">
            Este producto es apto para ti.
          </p>
          <div className="result-container__imgContainer">
            <img
              className="result-container__imgGreen"
              src={productFound.image}
              alt={productFound.name}
            />
          </div>
          <h3 className="result-container__nameGreen">{productFound.name}</h3>
          <h4 className="result-container__brandGreen">{productFound.brand}</h4>
          <p className="result-container__descriptionGreen">{productFound.description}</p>
        </div>
      )}
    </div>
  );
};

export default Results;
