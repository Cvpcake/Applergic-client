import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import "./FormRegister.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import { useNavigate } from 'react-router-dom';

import {SlideNextButton, SlidePrevButton,} from "../SlideNextButton/SlideNextButton";
// import "swiper/css";


export default function RegisterPage() {
 

  const { register, handleSubmit } = useForm();
  const [userAllergies, setUserAllergies] = useState([]);
  const [interruptor, setInterruptor] = useState(false);

          //----------ARRAYS ALLERGENS-----------
   const letterA = ['Ácido benzoico','Almendras','Altramuces','Anacardo','Api','Arroz','Avellana']
   const letterC = ['Cacahuete','Cacao', 'Castaña', 'Cereales', 'Coco', 'Crustaceos']
   const letterF = ['Fenilalanina','Fibras', 'Fresa', 'Fructosa', 'Frutas', 'Frutos de cáscara', 'Frutos rojos']
   const letterG = ['Gelatina','Gisante', 'Glucosa', 'Gluten']
   const letterL = ['Lactosa','Leche', 'Legumbres', 'Lenteja','Lino','LTP']
   const letterM = ['Maiz','Marisco', 'Melocotón', 'Molusco','Mostaza']
   const letterP = ['Pescado','Piñones', 'Pistachos', 'Plátano']
   const letterS = ['Sésamo', 'Soja', 'Sorbitol','Sulfitos']
   const letterT = ['Tomate','Trazas','Trigo']
   const letterV = ['Vitamina D','Vitamina E']


          //----------STATES ALLERGENS----------
  const [changeA, setChangeA] = useState('');
  const [changeC, setChangeC] = useState('');
  const [changeF, setChangeF] = useState('');
  const [changeG, setChangeG] = useState('');
  const [changeH, setChangeH] = useState('');
  const [changeK, setChangeK] = useState('');
  const [changeL, setChangeL] = useState('');
  const [changeM, setChangeM] = useState('');
  const [changeN, setChangeN] = useState('');
  const [changeP, setChangeP] = useState('');
  const [changeR, setChangeR] = useState('');
  const [changeS, setChangeS] = useState('');
  const [changeT, setChangeT] = useState('');
  const [changeU, setChangeU] = useState('');
  const [changeV, setChangeV] = useState('');
  const [changeY, setChangeY] = useState('');


  let navigate = useNavigate();

          //--------FUNCTION SUBMIT FORM--------
  const onSubmit = (formData) => {
    console.log(formData.allergies);
    API.post("users/", formData).then((res) => {
      console.log("Register user");
      console.log(formData);
      navigate("/Home")
    });
  };


          //-------FUNCTION CHECK ALLERGENS---------
   const handleCheckChildElement = (event) => {
    if(interruptor){
        setInterruptor(false)
    }else{
        setInterruptor(true)
    }

    if(!userAllergies.includes(event)){
     console.log('añade', userAllergies)
    const newAllergies = [ ...userAllergies, event ];
    setUserAllergies(newAllergies);
  } else {
    console.log('elimina', userAllergies)
    let pos = userAllergies.indexOf(event);
    userAllergies.splice(pos, 1);
  }
  } 

  return (
    <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
      
      {/* SOLUCIONAR...xd */}
      {/* <label htmlFor="image">Imagen</label>
            <input type="file" id="image" 
                   {...register("file")} /> */}
      <Swiper
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        className="swiperForm"
      >
            {/* ------------------ FORM DATA USER ----------------------*/}

        <SwiperSlide>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            defaultValue="Luisa María de las Nieves"
            {...register("name", { required: true })}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            defaultValue="luisam@delasnieves.com"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />

          <label htmlFor="phone">Movil</label>
          <input
            id="phone"
            defaultValue="605605605"
            {...register("phone", { required: true })}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            id="password"
            type="password"
            defaultValue="ABCedf123*"
            {...register("password", {
              required: true,
              //    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            })}
          />
          <SlideNextButton props="Guardar perfil" />
        </SwiperSlide>

            {/* --------------- FORM CONTACT EMERGENCI USER --------------- */}

        <SwiperSlide>
          <label htmlFor="nameContact">Nombre Completo de tu contacto</label>
          <input
            id="nameContact"
            defaultValue="Jorge de las Nieves"
            {...register("nameContact", { required: true })}
          />

          <label htmlFor="emailContact">Email del contacto</label>
          <input
            id="emailContact"
            defaultValue="jorge@delasnieves.com"
            {...register("emailContact", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />

          <label htmlFor="emergencyContact">Movil del contacto</label>
          <input
            id="emergencyContact"
            defaultValue="605605605"
            {...register("emergencyContact", { required: true })}
          />

          <label htmlFor="SecureCompany">
            Compañía de Seguro del contacto/ Nº de Póliza
          </label>
          <input
            id="SecureCompany"
            defaultValue="Mutua? idk xd"
            {...register("SecureCompany", { required: true })}
          />
          <SlideNextButton props="Guardar emergencia" />
        </SwiperSlide>

              {/* ----------------FORM SELECT ALLERGENS-------------------- */}

        <SwiperSlide>
          <div className="head">
          <SlidePrevButton className="head--back" props="◄ Volver"/><p className="head--p">3 de 4</p>
          </div>
          <div className="cont-text3">
            <h3 className="cont-text3--h3">Ahora selecciona tus alergias e intolerancias.</h3>
            <p className="cont-text3--p">Los elementos marcados serán identificados en tus busquedas como peligrosos para ti</p>
          </div>
          
            <div className="allLetters">
              <a className="allLetters__single" onClick={() => setChangeA('A')} href="#a" >A</a>
              <a className="allLetters__single" onClick={() => setChangeC('C')} href="#c" >C</a>
              <a className="allLetters__single" onClick={() => setChangeF('F')} href="#f" >F</a>
              <a className="allLetters__single" onClick={() => setChangeG('G')} href="#g" >G</a>
              <a className="allLetters__single" onClick={() => setChangeH('H')} href="#h" >H</a>
              <a className="allLetters__single" onClick={() => setChangeK('K')} href="#k" >K</a>
              <a className="allLetters__single" onClick={() => setChangeL('L')} href="#l" >L</a>
              <a className="allLetters__single" onClick={() => setChangeM('M')} href="#m" >M</a>
              <a className="allLetters__single" onClick={() => setChangeN('N')} href="#n" >N</a>
              <a className="allLetters__single" onClick={() => setChangeP('P')} href="#p" >P</a>
              <a className="allLetters__single" onClick={() => setChangeR('R')} href="#r" >R</a>
              <a className="allLetters__single" onClick={() => setChangeS('S')} href="#s" >S</a>
              <a className="allLetters__single" onClick={() => setChangeT('T')} href="#t" >T</a>
              <a className="allLetters__single" onClick={() => setChangeU('U')} href="#u" >U</a>
              <a className="allLetters__single" onClick={() => setChangeV('V')} href="#v" >V</a>
              <a className="allLetters__single" onClick={() => setChangeY('Y')} href="#y" >Y</a>
            </div>

        <div className="cont-select" id="a" >
          <div className="cont-select--deployed">
            <p className="allLetters__single" id="classA" >A</p>   {changeA === 'A' ? <p className="arrowTop" onClick={() => setChangeA('Ac')}>▲</p> : <p className="arrowBot" onClick={() => setChangeA('A')}>▼</p>}
          </div>
          {changeA === 'A'? <div className="cont-select--Allergens">
              {letterA.map((letA,index) => 
                <div id="ck-button" key={index}>
                  <label>
                    <input onClick={() => handleCheckChildElement(letA)} type="checkbox" value={letA.toLocaleLowerCase()} {...register("allergies")} />
                    <span>{letA}</span>
                  </label>
                </div>)} 
          </div> : null}
        </div>
        
        <div className="cont-select" id="c" >
          <div className="cont-select--deployed">
            <p className="allLetters__single">C</p>{changeC === 'C' ? <p className="arrowTop" onClick={() => setChangeC('Cc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeC('C')}>▼</p>}
          </div>
          {changeC === 'C' ?  <div className="cont-select--Allergens">
              {letterC.map((letC,index) => 
                <div id="ck-button" key={index}>
                  <label>
                   <input onClick={() => handleCheckChildElement(letC)} type="checkbox" value={letC.toLocaleLowerCase()} {...register("allergies")} />
                    <span>{letC}</span>
                 </label>
              </div>)} 
          </div> : null}
        </div>

        <div className="cont-select" id="f" >
          <div className="cont-select--deployed">
            <p className="allLetters__single">F</p>{changeF === 'F' ? <p className="arrowTop" onClick={() => setChangeF('Fc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeF('F')}>▼</p>}
          </div>
          {changeF === 'F' ? <div className="cont-select--Allergens">
              {letterF.map((letF,index) => 
                <div id="ck-button" key={index}>
                  <label>
                   <input onClick={() => handleCheckChildElement(letF)} type="checkbox" value={letF.toLocaleLowerCase()} {...register("allergies")} />
                    <span>{letF}</span>
                 </label>
              </div>)}
          </div> : null}
        </div>
        
      
        <div className="cont-select" id="g" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">G</p>{changeG === 'G' ? <p className="arrowTop" onClick={() => setChangeG('Gc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeG('G')}>▼</p>}
            </div>
            {changeG === 'G' ? <div className="cont-select--Allergens">
              {letterG.map((letG,index) => 
                <div id="ck-button" key={index}>
                  <label>
                   <input onClick={() => handleCheckChildElement(letG)} type="checkbox" value={letG.toLocaleLowerCase()} {...register("allergies")} />
                    <span>{letG}</span>
                 </label>
              </div>)}
            </div> : null}
        </div>

        <div className="cont-select" id="h" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">H</p>{changeH === 'H' ? <p className="arrowTop" onClick={() => setChangeH('Hc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeH('H')}>▼</p>}
            </div>
            {changeH === 'H' ? <div className="cont-select--Allergens"> 
              <div id="ck-button">
                <label>
                  <input onClick={() => handleCheckChildElement('Huevo')} type="checkbox" value="huevo" {...register("allergies")} />
                  <span>Huevo</span>
                </label>
              </div>
            </div> : null}
        </div>

        <div className="cont-select" id="k" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">K</p>{changeK === 'K' ? <p className="arrowTop" onClick={() => setChangeK('Kc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeK('K')}>▼</p>}
            </div>
            {changeK === 'K' ? <div className="cont-select--Allergens"> 
              <div id="ck-button">
                <label>
                  <input onClick={() => handleCheckChildElement('Kiwi')}  type="checkbox" value="kiwi" {...register("allergies")} />
                  <span>Kiwi</span>
                </label>
              </div>
            </div> : null}
        </div>

        <div className="cont-select" id="l" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">L</p>{changeL === 'L' ? <p className="arrowTop" onClick={() => setChangeL('Lc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeL('L')}>▼</p>}
            </div>
            {changeL === 'L' ? <div className="cont-select--Allergens"> 
                {letterL.map((letL,index) => 
                  <div id="ck-button" key={index}>
                    <label>
                      <input onClick={() => handleCheckChildElement(letL)} type="checkbox" value={letL.toLocaleLowerCase()} {...register("allergies")} />
                      <span>{letL}</span>
                    </label>
                </div>)}
            </div> : null}
        </div>
          
        <div className="cont-select" id="m" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">M</p>{changeM === 'M' ? <p className="arrowTop" onClick={() => setChangeM('Mc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeM('M')}>▼</p>}
            </div>
            {changeM === 'M' ? <div className="cont-select--Allergens"> 
                {letterM.map((letM,index) => 
                  <div id="ck-button" key={index}>
                    <label>
                      <input onClick={() => handleCheckChildElement(letM)} type="checkbox" value={letM.toLocaleLowerCase()} {...register("allergies")} />
                      <span>{letM}</span>
                    </label>
                </div>)}
            </div> : null}
        </div>
         

        <div className="cont-select" id="n" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">N</p>{changeN === 'N' ? <p className="arrowTop" onClick={() => setChangeN('Nc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeN('N')}>▼</p>}
            </div>
            {changeN === 'N' ? <div className="cont-select--Allergens">
              <div id="ck-button">
                <label>
                  <input onClick={() => handleCheckChildElement('Nueces')} type="checkbox" value="nueces" {...register("allergies")} />
                  <span>Nueces</span>
                </label>
            </div>
            </div> : null}
        </div>

        <div className="cont-select" id="p" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">P</p>{changeP === 'P' ? <p className="arrowTop" onClick={() => setChangeP('Pc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeP('P')}>▼</p>}
            </div>
            {changeP === 'P' ? <div className="cont-select--Allergens">
            {letterP.map((letP,index) => 
                  <div id="ck-button" key={index}>
                    <label>
                      <input onClick={() => handleCheckChildElement(letP)} type="checkbox" value={letP.toLocaleLowerCase()} {...register("allergies")} />
                      <span>{letP}</span>
                    </label>
                </div>)}
            </div> : null}
        </div>

        <div className="cont-select" id="r" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">R</p>{changeR === 'R' ? <p className="arrowTop" onClick={() => setChangeR('Rc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeR('R')}>▼</p>}
            </div>
            {changeR === 'R' ? <div className="cont-select--Allergens">
              <div id="ck-button">
                <label>
                  <input onClick={() => handleCheckChildElement('Rosaceas')} type="checkbox" value="rosaceas" {...register("allergies")} />
                  <span>Rosaceas</span>
                </label>
              </div>
            </div> : null}
        </div>

        <div className="cont-select" id="s" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">S</p>{changeS === 'S' ? <p className="arrowTop" onClick={() => setChangeS('Sc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeS('S')}>▼</p>}
            </div>
            {changeS === 'S' ? <div className="cont-select--Allergens">
            {letterS.map((letS,index) => 
                  <div id="ck-button" key={index}>
                    <label>
                      <input onClick={() => handleCheckChildElement(letS)} type="checkbox" value={letS.toLocaleLowerCase()} {...register("allergies")} />
                      <span>{letS}</span>
                    </label>
                  </div>)}
            </div> : null}
        </div>

        <div className="cont-select" id="t" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">T</p>{changeT === 'T' ? <p className="arrowTop" onClick={() => setChangeT('Tc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeT('T')}>▼</p>}
            </div>
            {changeT === 'T' ? <div className="cont-select--Allergens">
            {letterT.map((letT,index) => 
                  <div id="ck-button" key={index}>
                    <label>
                      <input onClick={() => handleCheckChildElement(letT)} type="checkbox" value={letT.toLocaleLowerCase()} {...register("allergies")} />
                      <span>{letT}</span>
                    </label>
                  </div>)}
            </div> : null}
        </div>

        <div className="cont-select" id="u" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">U</p>{changeU === 'U' ? <p className="arrowTop" onClick={() => setChangeU('Uc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeU('U')}>▼</p>}
            </div>
            {changeU === 'U' ? <div className="cont-select--Allergens">
              <div id="ck-button">
                <label>
                  <input onClick={() => handleCheckChildElement('Uva')} type="checkbox" value="uva" {...register("allergies")} />
                  <span>Uva</span>
                </label>
              </div>
            </div> : null}
        </div>

        <div className="cont-select" id="v" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">V</p>{changeV === 'V' ? <p className="arrowTop" onClick={() => setChangeV('Vc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeV('V')}>▼</p>}
            </div>
            {changeV === 'V' ? <div className="cont-select--Allergens">
            {letterV.map((letV,index) => 
                  <div id="ck-button" key={index}>
                    <label>
                      <input onClick={() => handleCheckChildElement(letV)} type="checkbox" value={letV.toLocaleLowerCase()} {...register("allergies")} />
                      <span>{letV}</span>
                    </label>
                  </div>)}
            </div> : null}
        </div>
    
        <div className="cont-select" id="y" >
            <div className="cont-select--deployed">
              <p className="allLetters__single">U</p>
              {changeY === 'Y' ? <p className="arrowTop" onClick={() => setChangeY('Yc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeY('Y')}>▼</p>}
            </div>
            {changeY === 'Y' ? <div className="cont-select--Allergens">
              <div id="ck-button">
                <label>
                  <input onClick={() => handleCheckChildElement('Yuca')} type="checkbox" value="yuca" {...register("allergies")} />
                  <span>Yuca</span>
                </label>
              </div>
            </div> : null}
        </div>
    
          <SlideNextButton className="saveAllergens" props="Guardar alergias"></SlideNextButton>
        </SwiperSlide>

          {/* ----------------- CONFIRM ALLERGENS & SEND REGISTER -------------------- */}

        <SwiperSlide>
          <div className="cont-text4" id="startSe">
            <h3 className="cont-text4--h3">Confirma tu seleccion.</h3>
            <p className="cont-text4--p">A continuación te resumimos los alimentos registrados como peligrosos para ti</p>
          </div>
          <div className="conf-aller" >
            <p className="conf-aller--p">Si quieres modificar tu selección o añadir más alergenos pulsa en añadir nuevos</p>
            <ul className="conf-aller--result">
            {interruptor ? 
              userAllergies.map((allergie, index ) => {return <li className="conf-aller--select" key={index}>{allergie}</li>}) 
                : 
              userAllergies.map((allergie, index ) => {return <li className="conf-aller--select" key={index}>{allergie}</li>;})
              }
            </ul>
            <SlidePrevButton className="conf-aller--addNew" props="Añadir nuevos" />
          </div>
          
          <button className="btn-submit" type="submit">CONFIRMAR</button>
        </SwiperSlide>

      </Swiper>
    </form>
  );
}
