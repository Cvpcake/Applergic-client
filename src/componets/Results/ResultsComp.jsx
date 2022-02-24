import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ResultsComp.scss";
import { API } from "../../shared/services/api";


function Results({ data, dismissQrReader }) {
  const [productFound, setProductFound] = useState({});
  const [match, setMatch] = useState(0);
  const [userAllergies, setUserAllergies] = useState([]);
  let healthy = 0;

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getProducts();
    getUserLogin();
    dismissQrReader();
  }, [data]);

  const getProducts = () => {
    try {
      axios(`http://localhost:5000/api/products/${data}`).then((res) => {
        setMatch(1);
        setProductFound(res.data);
        
      });
    } catch (err) {
      setMatch(0);
      console.log(err);
    }
  };

  const getUserLogin = () => {
    API.get(`users/${user}`).then((res) => {
      setUserAllergies(res.data.allergies);
    });
  };

  const compare = () => {
    if (healthy === 1 || match === 0) {
      return;
    } else {
      for (var i = 0; i < userAllergies.length; i++) {
        console.log(userAllergies[i], "userAllergies");
        let allergy = userAllergies[i];
        // eslint-disable-next-line no-loop-func
        productFound.allergens.map((allergen) => {
          console.log(allergen.name, "Soy los alergenos");

          if (allergy === allergen.name) {
            console.log("He encontrado una alergia con este producto");
             healthy = 1;
          }
          return healthy;
        })
        console.log(healthy)
      }
    }
  };
  compare();
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
      ) : healthy === 0 ? (
        <div className="result-container">
          <h2 className="result-container__title">Aqui tienes el resultado</h2>
          <p className="result-container__text">
            Este producto es apto para ti.
          </p>
          <div className="second-img">
          <div className="result-container__imgContainer">
            <img
              className="result-container__imgGreen"
              src={productFound.image}
              alt={productFound.name}
            />
          </div>
          </div>
          <h3 className="result-container__nameGreen">{productFound.name}</h3>
          <h4 className="result-container__brandGreen">{productFound.brand}</h4>
          <p className="result-container__descriptionGreen">
            {productFound.description}
          </p>
        </div>
      ) : (
        <div className="result-container">
          <h2 className="result-container__title">Aqui tienes el resultado</h2>
          <p className="result-container__text">
            Este producto <span>NO</span> es apto para ti.
          </p>
          <div className="result-container__imgContainer">
            <img className="result-container__checkImg" src="../images/checkX.png" alt="Check"/>
            <img
              className="result-container__imgPink"
              src={productFound.image}
              alt={productFound.name}
            />
          </div>
          <h3 className="result-container__namePink">{productFound.name}</h3>
          <h4 className="result-container__brandPink">{productFound.brand}</h4>
          <p className="result-container__descriptionPink">
            {productFound.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Results;
