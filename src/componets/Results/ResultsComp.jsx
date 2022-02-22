import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ResultsComp.scss";
import {API} from '../../shared/services/api';
/* import { UserContext } from "../../shared/contexts/UserContext"; */

function Results({ data, dismissQrReader }) {
  const [productFound, setProductFound] = useState({});
  const [match, setMatch] = useState(0);
  const [userAllergies, setUserAllergies] = useState([]);
  const [healthy, setHealthy] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
    API.get(`users/${user}`).then(res => {
      setUserAllergies(res.data.allergies)
  })
    getProducts();
    dismissQrReader();
    
  }, [data]);

  const getProducts =  () => {
    try {
       axios(`http://localhost:5000/api/products/${data}`).then((res) => {
        setMatch(1);
        setProductFound(res.data);
        compare();
      });
    } catch (error) {
      setMatch(0);
      console.log(error);
    }
  };

  const compare = () => {
    console.log('entro en el compare')
    for (const allergy of userAllergies) {
      for (const allergen of productFound.allergens) {
        console.log(allergy,'soy allergy');
        console.log(allergen, 'soy allergen');
        
        if(allergy === allergen.name){
          console.log('Tiene alergenos')
          setHealthy(false);
        }
      }
    }
  }


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
      ) : healthy === false ? ( 
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
          <p className="result-container__descriptionGreen">
            {productFound.description}
          </p>
        </div>
      ) : (<div>
        <p>Este producto no es pa ti BRO</p>
      </div>)}
    </div>
  );
}

export default Results;
