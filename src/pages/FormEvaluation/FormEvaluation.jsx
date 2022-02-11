
import "../FormEvaluation/FormEvaluation.scss";
import React from 'react'

const FormEvaluation = () => {
  return (
   <form className="evaluation">
       <div className="FormEvaluation-container">
      <img src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644422668/Applergic/logoApplergicFigurasGiro_1_tunfnm.png" alt="logodespedida" />
      </div>
      <p className="txt">¡Gracias por usar Applergic! </p>
      <p className="txt">Por favor, evalua tu experiencia.</p>
  < div className="clasificacion">
    <input className="estrella"id="radio1" type="radio" name="estrellas" value="5"></input>
    <label className="etiqueta" for="radio1" >★</label>
    <input className=" estrella" id="radio2" type="radio" name="estrellas" value="4"></input>
    <label className="etiqueta" for="radio2">★</label>
    <input className="estrella" id="radio3" type="radio" name="estrellas" value="3"></input>
    <label className="etiqueta" for="radio3">★</label>
    <input className="estrella" id="radio4" type="radio" name="estrellas" value="2"></input>
    <label className="etiqueta" for="radio4">★</label>
    <input className="estrella" id="radio5" type="radio" name="estrellas" value="1"></input>
    <label className="etiqueta" for="radio5">★</label>
  </div>
  <a className="pagina">Enviar Sugerencias</a>

</form>
)}
export default FormEvaluation



