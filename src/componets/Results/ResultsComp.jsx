import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {BarcodeContext} from '../../shared/contexts/BarcodeContext';
import './ResultsComp.scss';
let productsOrden = [];

const Results = ({ data, dismissQrReader }) => {

  const [productFound, setProductFound] = useState({});
 

  let navigate = useNavigate();
  
  useEffect(() => {
    if (data.length > 0) {
      getProducts();
      dismissQrReader();
   

    }
  }, [data]);

  const getProducts = () => {
    axios(`http://localhost:5000/api/products/${data}`).then((res) => {
      console.log(res);
      setProductFound(res.data);
    });
  };

  return (
    <div className="result-container">
    <h2 className="result-container__title">Aqui tienes el resultado</h2>
    <div className="result-container__imgContainer">
      <img className="result-container__img" src={productFound.image} alt={productFound.name}/>
    </div>
      <h3>{productFound.name}</h3>
      <h4>{productFound.brand}</h4>
      <p>{productFound.description}</p>
    </div>
  );
};

export default Results;
