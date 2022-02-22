import React from 'react';
import './DropdownBtn.scss';
import AuthButton from '../AuthButton/AuthButton';
export const DropdownBtn = () => {
  return (
    <div>


<div className="dropdown">
  <button className="dropbtn"><img className="dropdown-img" src="./images/desplegable.png" alt="desplegable" /></button>
  <div className="dropdown-content">
    <a href="#"><img className="dropdown-img" src="./images/perfil.png" alt="perfil" /><p className="dropdown-p">Perfil</p></a>
    <a href="#"><img className="dropdown-img" src="./images/fav.png" alt="favoritos" /><p className="dropdown-p">Favorito</p></a>
    <a href="#"><img className="dropdown-img" src="./images/diario.png" alt="diario" /><p className="dropdown-p">Diario</p></a>
    <a href="#"><img className="dropdown-img" src="./images/compartir.png" alt="compartir" /><p className="dropdown-p">Compartir</p></a>
    <AuthButton />
   {/*  <a href="#"><img className="dropdown-img" src="./images/exit.png" alt="exit" /><p className="dropdown-p">Salir</p></a> */}
  </div>
</div>

<p><strong>Note:</strong> We use href="#" for test links. In a real web site this would be URLs.</p>
    </div>
  )
}



