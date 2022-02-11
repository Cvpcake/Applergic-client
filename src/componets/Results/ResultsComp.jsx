import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

let productsOrden = [];

const Results = ({ data, dismissQrReader }) => {

  let navigate = useNavigate();
  
  useEffect(() => {
    if (data.length > 0) {
      getProducts();
      dismissQrReader();
      navigate("/Home/Results");

    }
  }, [data]);

  const getProducts = () => {
    axios(`http://localhost:5000/api/products/${data}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default Results;
