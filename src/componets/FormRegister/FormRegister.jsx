import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import "./FormRegister.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import { useNavigate } from 'react-router-dom';

import {
  SlideNextButton1,
  SlideNextButton2,
  SlideNextButton3,
  SlidePrevButton,
} from "../SlideNextButton/SlideNextButton";
import "swiper/css";


export default function RegisterPage() {
 

  const { register, handleSubmit } = useForm();
  const [userAllergies, setUserAllergies] = useState([]);
  const [interruptor, setInterruptor] = useState(false);
  const [change, setChange] = useState('');

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
          //------------FUNCTION DEPLOY ALLERGENS---------------
  // const deployAllerg = () =>{
  //   if(change){
  //     setChange(false)
  //   }else{
  //     setChange(true)
  //   }
  // }

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
          <SlideNextButton1 />
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
          <SlideNextButton2 s/>
        </SwiperSlide>

              {/* ----------------FORM SELECT ALLERGENS-------------------- */}

        <SwiperSlide>
            
            <div className="allLetters">
              <a className="allLetters__single" onClick={() => setChange('A')} href="#a">A</a>
              <a className="allLetters__single" onClick={() => setChange('C')} href="#c">C</a>
              <a className="allLetters__single" onClick={() => setChange('F')} href="#f">F</a>
              <a className="allLetters__single" href="#g">G</a>
              <a className="allLetters__single" href="#h">H</a>
              <a className="allLetters__single" href="#k">K</a>
              <a className="allLetters__single" href="#l">L</a>
              <a className="allLetters__single" href="#m">M</a>
              <a className="allLetters__single" href="#n">N</a>
              <a className="allLetters__single" href="#p">P</a>
              <a className="allLetters__single" href="#r">R</a>
              <a className="allLetters__single" href="#s">S</a>
              <a className="allLetters__single" href="#t">T</a>
              <a className="allLetters__single" href="#u">U</a>
              <a className="allLetters__single" href="#v">V</a>
              <a className="allLetters__single" href="#y">Y</a>
            </div>

        <div className="cont-select" id="a" >
            <div className="cont-select--deployed">
              <p>A</p>{change === 'A' ? <p onClick={() => setChange('')}>▲</p> : <p onClick={() => setChange('A')}>▼</p>}
            </div>
        {change === 'A'? 
        <div className="cont-select--Allergens">
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Ácido benzoico')} type="checkbox" value="ácido benzoico" {...register("allergies")} />
              <span>Ácido benzoico</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Almendras')} type="checkbox" value="almendras" {...register("allergies")} />
              <span>Almendras</span>
            </label>
          </div>
          
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Altramuces')} type="checkbox" value="altramuces" {...register("allergies")} />
              <span>Altramuces</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Anacardo')} type="checkbox" value="anacardo" {...register("allergies")} />
              <span>Anacardo</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Apio')} type="checkbox" value="apio" {...register("allergies")} />
              <span>Apio</span>
            </label>
          </div>
          
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Arroz')} type="checkbox" value="arroz" {...register("allergies")} />
              <span>Arroz</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Avellana')} type="checkbox" value="avellana" {...register("allergies")} />
              <span>Avellana</span>
            </label>
          </div>

        </div>
        : null}
      </div>

      <div className="cont-select" id="c" >
            <div className="cont-select--deployed">
              <p>C</p>{change === 'C' ? <p onClick={() => setChange('')}>▲</p> : <p onClick={() => setChange('C')}>▼</p>}
            </div>
            {change === 'C' ? 
        <div className="cont-select--Allergens">    
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Cacahuete')} type="checkbox" value="cacahuete" {...register("allergies")} />
              <span>Cacahuete</span>
            </label>
          </div>
          
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Cacao')} type="checkbox" value="cacao" {...register("allergies")} />
              <span>Cacao</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Castaña')} type="checkbox" value="castaña" {...register("allergies")} />
              <span>Castaña</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Cereales')} type="checkbox" value="cereales" {...register("allergies")} />
              <span>Cereales</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Coco')} type="checkbox" value="coco" {...register("allergies")} />
              <span>Coco</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Crustaceos')} type="checkbox" value="crustaceos" {...register("allergies")} />
              <span>Crustaceos</span>
            </label>
          </div>
        </div>: null}
      </div>

      <div className="cont-select" id="f" >
            <div className="cont-select--deployed">
              <p>F</p>{change === 'F' ? <p onClick={() => setChange('')}>▲</p> : <p onClick={() => setChange('F')}>▼</p>}
            </div>
            {change === 'F' ? 
        <div className="cont-select--Allergens">        
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Frutos de cáscara')} type="checkbox" value="Frutos de cáscara" {...register("allergies")} />
              <span>Frutos de cáscara</span>
            </label>
          </div>
        </div> : null}
      </div>



          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Huevo')} name="huevoAllergie" type="checkbox" value="huevo" {...register("allergies")} />
              <span>Huevo</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Gluten')}  name="glutenAllergie" type="checkbox" value="Gluten" {...register("allergies")} />
              <span>Gluten</span>
            </label>
          </div>

          

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Lacteos')} type="checkbox" value="Lacteos" {...register("allergies")} />
              <span>Lacteos</span>
            </label>
          </div>

            
          
            
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Pescado')} type="checkbox" value="Pescado" {...register("allergies")} />
              <span>Pescado</span>
            </label>
          </div>
        
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Soja')} type="checkbox" value="Soja" {...register("allergies")} />
              <span>Soja</span>
            </label>
          </div>
         
          

          
         
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Mostaza')} type="checkbox" value="Mostaza" {...register("allergies")} />
              <span>Mostaza</span>
            </label>
          </div>
         
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Sésamo')} type="checkbox" value="Sésamo" {...register("allergies")} />
              <span>Sésamo</span>
            </label>
          </div>
        
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Sulfitos')} type="checkbox" value="Sulfitos" {...register("allergies")} />
              <span>Sulfitos</span>
            </label>
          </div>
            
          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Moluscos')} type="checkbox" value="Moluscos" {...register("allergies")} />
              <span>Moluscos</span>
            </label>
          </div>
     
          

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Setas')} type="checkbox" value="Setas" {...register("allergies")} />
              <span>Setas</span>
            </label>
          </div>
    
          <SlideNextButton3 />
        </SwiperSlide>

          {/* ----------------- CONFIRM ALLERGENS & SEND REGISTER -------------------- */}

        <SwiperSlide>
          <h2>CONFIRMAR TU SELECCIÓN</h2>
          <SlidePrevButton />

          <ul className="result-allergies">
          {interruptor ? 
              userAllergies.map((allergie, index ) => {return <li key={index}>{allergie}</li>}) 
                : 
              userAllergies.map((allergie, index ) => {return <li key={index}>{allergie}</li>;})
            }

          </ul>

          <button type="submit">CONFIRMAR</button>
        </SwiperSlide>

      </Swiper>
    </form>
  );
}
