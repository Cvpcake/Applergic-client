import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import "./FormRegister.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import { useNavigate,Link } from 'react-router-dom';

import {SlideNextButton, SlidePrevButton,} from "../SlideNextButton/SlideNextButton";
import { useEffect } from "react";

export default function RegisterPage() {
 
  const { register, handleSubmit, formState:{errors} } = useForm();
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

          //-------FUNCTION CHECK ALLERGENS PRINT SELECT---------
   const handleCheckChildElement = (event) => {
    if(interruptor){
        setInterruptor(false)
    }else{
        setInterruptor(true)
    }

          //---------FUNCTION ADD AND DELETE CHECKED ALLERGENS-------
    if(!userAllergies.includes(event)){
      // console.log('añade', userAllergies)
      const newAllergies = [ ...userAllergies, event ];
      setUserAllergies(newAllergies);
    } else {
      // console.log('elimina', userAllergies)
      let pos = userAllergies.indexOf(event);
      userAllergies.splice(pos, 1);
    }
  } 


    //--------FUNCTION ALL EMAILS--------
  useEffect(()=>{
    emailsUsers();
  },[])

    const emailsUsers = () =>{
      API.get("users/allUsers").then((res) => {
        // console.log(res.data);
        setEmails(res.data)
      });
    }
    
    const [repeat, setRepeat] = useState();
    const [data, setData] = useState()

    //--------FUNCTION SUBMIT FORM--------
    useEffect(()=>{
      // console.log('soy useEffect')
      if(repeat === false){
        // console.log('soy if submit')

      submitRegister(data);
        }
    },[repeat,data])

    const submitRegister = (formdata) =>{
            API.post("users/", formdata).then((res) => {
            // console.log("Register user");
            // console.log(formdata);
            navigate("/Home/FinalRegistro")
          });
    }

         //--------SET USER SUBMIT REPEAT--------
         
         const [emails, setEmails] = useState([]);
         
         const onSubmit = async (formData) => {
          setData(formData)
          // console.log(formData);
          // console.log(emails);
          // console.log(formData.email);
             if(emails.includes(formData.email)){
                // console.log('Usuario ya existe')
                setRepeat(true)
             }else{
              //  console.log('me e cambiado a false')
                setRepeat(false)
             }
        };


        
  return (
    <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
      
      <Swiper
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        className="swiperForm"
      >
            {/* ------------------ PAGE FORM DATA USER ----------------------*/}

        <SwiperSlide className="Page1">
        <div className="head" id="page1">
          <Link className="head--back" to="/Login">◄ Volver</Link><p className="head--p">1 de 4</p>
          </div>
          <div className="cont-text3">
            <h2 className="cont-text3--h3">Dinos quién eres.</h2>
          </div>
        <div className="contInputEmer">
          <label htmlFor="name"></label>
          <input className="EmerName"
            id="name"
            placeholder="Nombre completo"
            {...register("name", 
            {required:{
              value: true,
              message: "Introduce un nombre"}
            })}
          />
          {errors.name && <div className="divMessg"><img className="divMessg--img" src="./images/alerticon.png" alt="alerta"/><p className="divMessg--text">{errors.name.message}</p></div>}

          <label htmlFor="email"></label>
          <input className="EmerContact"
            id="email"
            placeholder="Dirección e-mail"
            {...register("email", {
              required:{
              value: true,
              message: "Introduce un e-mail"
              },
              pattern:{
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "El formato de e-mail no es correcto"
              }
            })}
          />  
            {repeat === true ? <div className="divMessg"><img className="divMessg--img" src="./images/alerticon.png" alt="alerta"/><p className="divMessg--text">email existente, introduce un nuevo email y vuelve a guardar tús cambios</p></div> : null }
            {errors.email && <div className="divMessg"><img className="divMessg--img" src="./images/alerticon.png" alt="alerta"/><p className="divMessg--text">{errors.email.message}</p></div>}
          
          <label htmlFor="phone"></label>
          <input className="EmerContact"
            id="phone"
            placeholder="Móvil"
            {...register("phone", { 
              required:{
              value: true,
              message: "Introduce un número de teléfono"}
            })}
          />

            {errors.phone && <div className="divMessg"><img className="divMessg--img" src="./images/alerticon.png" alt="alerta"/><p className="divMessg--text">{errors.phone.message}</p></div>}
          <label htmlFor="password"></label>
          <input className="EmerContact"
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            {...register("password", {
              required:{
                value: true,
                message: "Introduce una contraseña"
              },
              minLength: {
                value: 8,
                message: "La contraseña tiene que tener más de 8 caracteres"
              },
              maxLength: {
                value: 24,
                message: "La contraseña no puede tener más de 24 caracteres"
              },
              pattern:{
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/,
                message: "La contraseña debe contener letra mayuscula, minuscula, número y un caracter especial (!@#$%^&*_=+-)"
              },
              })}
          />
          {errors.password && <div className="divMessgPass"><img className="divMessgPass--img" src="./images/alerticon.png" alt="alerta"/><p className="divMessgPass--text">{errors.password.message}</p></div>}
          </div>
          <SlideNextButton props="Guardar perfil" className1="saveAllerAncor" className="saveAllergens" isdisabled={false} />
        </SwiperSlide>

        {/* --//////////////////////////-- PAGE FORM CONTACT EMERGENCI USER --//////////////////////////-- */}

        <SwiperSlide>
        <div className="head">
          <SlidePrevButton className="head--back" props="◄ Volver"/><p className="head--p">2 de 4</p>
          </div>
          <div className="cont-text3">
            <h2 className="cont-text3--h3">Vamos a añadir tu contacto en caso de emergencia</h2>
            <p className="cont-text3--p">Nos pondremos en contacto con tu persona de confianza y/o compañia de seguros en caso de emergencia.</p>
          </div>

          <div className="contInputEmer">
          <label htmlFor="nameContact"></label>
          <input className="EmerName" placeholder="Nombre completo de tu contacto"
            id="nameContact"
            {...register("nameContact")}
          />

          <label htmlFor="emailContact"></label>
          <input className="EmerContact" placeholder="Dirección e-mail"
            id="emailContact"
            {...register("emailContact", {
              pattern:{
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "El formato de e-mail no es correcto"
            }})}
          />
          {errors.emailContact && <div className="divMessg"><img className="divMessg--img" src="./images/alerticon.png" alt="alerta"/><p className="divMessg--text">{errors.emailContact.message}</p></div>}

          <label htmlFor="emergencyContact"></label>
          <input className="EmerContact" placeholder="Móvil"
            id="emergencyContact"
            {...register("emergencyContact")}
          />

          <label htmlFor="SecureCompany"></label>
          <input className="EmerContact" placeholder="Compañia de Seguros / Nº Póliza"
            id="SecureCompany"
            {...register("SecureCompany")}
          />
        
          </div>
          <SlideNextButton props="Guardar emergencias"  className1="saveAllerAncor" className="saveAllergens"/>
          <SlideNextButton props="Registrare mi contacto en otro momento" className="otherRegister"/>
        </SwiperSlide>

              {/* ----------------PAGE FORM SELECT ALLERGENS-------------------- */}

        <SwiperSlide>
          <div className="head">
          <SlidePrevButton className="head--back" props="◄ Volver"/><p className="head--p">3 de 4</p>
          </div>
          <div className="cont-text3">
            <h2 className="cont-text3--h3">Ahora selecciona tus alergias e intolerancias.</h2>
            <p className="cont-text3--p">Los elementos marcados serán identificados en tus búsquedas como peligrosos para ti</p>
          </div>
          
            <div className="allLetters">
              <a className={(changeA === 'A') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeA('A')} href="#a" >A</a>
              <a className={(changeC === 'C') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeC('C')} href="#c" >C</a>
              <a className={(changeF === 'F') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeF('F')} href="#f" >F</a>
              <a className={(changeG === 'G') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeG('G')} href="#g" >G</a>
              <a className={(changeH === 'H') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeH('H')} href="#h" >H</a>
              <a className={(changeK === 'K') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeK('K')} href="#k" >K</a>
              <a className={(changeL === 'L') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeL('L')} href="#l" >L</a>
              <a className={(changeM === 'M') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeM('M')} href="#m" >M</a>
              <a className={(changeN === 'N') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeN('N')} href="#n" >N</a>
              <a className={(changeP === 'P') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeP('P')} href="#p" >P</a>
              <a className={(changeR === 'R') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeR('R')} href="#r" >R</a>
              <a className={(changeS === 'S') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeS('S')} href="#s" >S</a>
              <a className={(changeT === 'T') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeT('T')} href="#t" >T</a>
              <a className={(changeU === 'U') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeU('U')} href="#u" >U</a>
              <a className={(changeV === 'V') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeV('V')} href="#v" >V</a>
              <a className={(changeY === 'Y') ? "allLetters__single--red" : "allLetters__single--grey"} onClick={() => setChangeY('Y')} href="#y" >Y</a>
            </div>

        <div className="cont-select" id="a" >
          <div className="cont-select--deployed">
            <p className={(changeA === 'A') ? "allLetters__single--red" : "allLetters__single--grey"} id="classA" >A</p>
            {changeA === 'A' ? <p className="arrowTop" onClick={() => setChangeA('Ac')}>▲</p> : <p className="arrowBot" onClick={() => setChangeA('A')}>▼</p>}
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
            <p className={(changeC === 'C') ? "allLetters__single--red" : "allLetters__single--grey"}>C</p>
            {changeC === 'C' ? <p className="arrowTop" onClick={() => setChangeC('Cc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeC('C')}>▼</p>}
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
            <p className={(changeF === 'F') ? "allLetters__single--red" : "allLetters__single--grey"}>F</p>
            {changeF === 'F' ? <p className="arrowTop" onClick={() => setChangeF('Fc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeF('F')}>▼</p>}
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
              <p className={(changeG === 'G') ? "allLetters__single--red" : "allLetters__single--grey"}>G</p>
              {changeG === 'G' ? <p className="arrowTop" onClick={() => setChangeG('Gc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeG('G')}>▼</p>}
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
              <p className={(changeH === 'H') ? "allLetters__single--red" : "allLetters__single--grey"}>H</p>
              {changeH === 'H' ? <p className="arrowTop" onClick={() => setChangeH('Hc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeH('H')}>▼</p>}
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
              <p className={(changeK === 'K') ? "allLetters__single--red" : "allLetters__single--grey"}>K</p>
              {changeK === 'K' ? <p className="arrowTop" onClick={() => setChangeK('Kc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeK('K')}>▼</p>}
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
              <p className={(changeL === 'L') ? "allLetters__single--red" : "allLetters__single--grey"}>L</p>
              {changeL === 'L' ? <p className="arrowTop" onClick={() => setChangeL('Lc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeL('L')}>▼</p>}
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
              <p className={(changeM === 'M') ? "allLetters__single--red" : "allLetters__single--grey"}>M</p>
              {changeM === 'M' ? <p className="arrowTop" onClick={() => setChangeM('Mc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeM('M')}>▼</p>}
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
              <p className={(changeN === 'N') ? "allLetters__single--red" : "allLetters__single--grey"}>N</p>
              {changeN === 'N' ? <p className="arrowTop" onClick={() => setChangeN('Nc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeN('N')}>▼</p>}
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
              <p className={(changeP === 'P') ? "allLetters__single--red" : "allLetters__single--grey"}>P</p>
              {changeP === 'P' ? <p className="arrowTop" onClick={() => setChangeP('Pc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeP('P')}>▼</p>}
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
              <p className={(changeR === 'R') ? "allLetters__single--red" : "allLetters__single--grey"}>R</p>
              {changeR === 'R' ? <p className="arrowTop" onClick={() => setChangeR('Rc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeR('R')}>▼</p>}
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
              <p className={(changeS === 'S') ? "allLetters__single--red" : "allLetters__single--grey"}>S</p>
              {changeS === 'S' ? <p className="arrowTop" onClick={() => setChangeS('Sc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeS('S')}>▼</p>}
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
              <p className={(changeT === 'T') ? "allLetters__single--red" : "allLetters__single--grey"}>T</p>
              {changeT === 'T' ? <p className="arrowTop" onClick={() => setChangeT('Tc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeT('T')}>▼</p>}
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
              <p className={(changeU === 'U') ? "allLetters__single--red" : "allLetters__single--grey"}>U</p>
              {changeU === 'U' ? <p className="arrowTop" onClick={() => setChangeU('Uc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeU('U')}>▼</p>}
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
              <p className={(changeV === 'V') ? "allLetters__single--red" : "allLetters__single--grey"}>V</p>
              {changeV === 'V' ? <p className="arrowTop" onClick={() => setChangeV('Vc')}>▲</p> : <p className="arrowBot" onClick={() => setChangeV('V')}>▼</p>}
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
              <p className={(changeY === 'Y') ? "allLetters__single--red" : "allLetters__single--grey"}>Y</p>
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
    
          <SlideNextButton className="saveAllergens" className1="saveAllerAncor" href="#startSe" props="Guardar alergias"/>
        </SwiperSlide>

          {/* ----------------- PAGE CONFIRM ALLERGENS & SEND REGISTER -------------------- */}

        <SwiperSlide className="slideFinal" id="startSe">
        <div className="head">
           <SlidePrevButton className="head--back" props="◄ Volver" /> {/* setrepeat={setRepeat("")} */}
          </div>
          <div className="cont-text4">
            <h2 className="cont-text4--h3">Confirma tu selección.</h2>
            <p className="cont-text4--p">A continuación te resumimos los alimentos registrados como peligrosos para ti</p>
          </div>
          <div className="conf-aller" >
            <p className="conf-aller--p">Si quieres modificar tu selección o añadir más alérgenos pulsa en añadir nuevos</p>
            <ul className="conf-aller--result">
            {interruptor ? 
              userAllergies.map((allergie, index ) => {return <li className="conf-aller--select" key={index}>{allergie}</li>}) 
                : 
              userAllergies.map((allergie, index ) => {return <li className="conf-aller--select" key={index}>{allergie}</li>;})
              }
            </ul>
            <SlidePrevButton className="conf-aller--addNew" props="Añadir nuevos" />
            
          </div>
          {errors.name ? <div className="alert"><img className="alert--img" src="./images/alerticon.png" alt="alerta"/><p className="alert--text">Se ha encontrado un error en el apartado "Dinos quien eres", vuelve a la página 1</p></div> : 
          errors.email ? <div className="alert"><img className="alert--img" src="./images/alerticon.png" alt="alerta"/><p className="alert--text">Se ha encontrado un error en el apartado "Dinos quien eres", vuelve a la página 1</p></div> : 
          errors.phone ? <div className="alert"><img className="alert--img" src="./images/alerticon.png" alt="alerta"/><p className="alert--text">Se ha encontrado un error en el apartado "Dinos quien eres", vuelve a la página 1</p></div> : 
          errors.password ? <div className="alert"><img className="alert--img" src="./images/alerticon.png" alt="alerta"/><p className="alert--text">Se ha encontrado un error en el apartado "Dinos quien eres", vuelve a la página 1</p></div> : 
          null}
          {repeat === true ? <div className="alert"><img className="alert--img" src="./images/alerticon.png" alt="alerta"/><p className="alert--text">Tu usuario ya existe, puedes utilizar un nuevo email para crear un usuario nuevo o volver al espacio de <Link to="/Login">iniciar sesión</Link></p></div> : null }
          <button className="btn-submit" type="submit" >CONFIRMAR</button>
        </SwiperSlide>
        
      </Swiper>
    </form>
  );
}
