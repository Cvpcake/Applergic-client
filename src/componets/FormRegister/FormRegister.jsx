import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import "./FormRegister.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import {
  SlideNextButton1,
  SlideNextButton2,
  SlideNextButton3,
  SlidePrevButton,
} from "../SlideNextButton/SlideNextButton";
import "swiper/css";
import { Link } from 'react-router-dom';
// let valueCont = 0

export default function RegisterPage() {
 

  const { register, handleSubmit } = useForm();
  const [userAllergies, setUserAllergies] = useState([]);

  const onSubmit = (formData) => {
    console.log(formData.allergies);
    API.post("users/", formData).then((res) => {
      console.log("Register user");
      console.log(res);
      console.log(formData);
    });
  };
  console.log(register);

  
   const handleCheckChildElement = (event) => {
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
          <SlideNextButton2 />
        </SwiperSlide>

        <SwiperSlide>
          {/*  <ul> 
            <li> */}

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Huevo')} name="huevoAllergie" type="checkbox" value="Huevo" {...register("allergies")} />
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
              <input onClick={() => handleCheckChildElement('Crustaceos')} type="checkbox" value="Crustaceos" {...register("allergies")} />
              <span>Crustaceos</span>
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
              <input onClick={() => handleCheckChildElement('Cacao')} type="checkbox" value="Cacao" {...register("allergies")} />
              <span>Cacao</span>
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
              <input onClick={() => handleCheckChildElement('Frutos de cáscara')} type="checkbox" value="Frutos de cáscara" {...register("allergies")} />
              <span>Frutos de cáscara</span>
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input onClick={() => handleCheckChildElement('Apio')} type="checkbox" value="Apio" {...register("allergies")} />
              <span>Apio</span>
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
              <input onClick={() => handleCheckChildElement('Altramuces')} type="checkbox" value="Altramuces" {...register("allergies")} />
              <span>Altramuces</span>
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

        <SwiperSlide>
          <h2>CONFIRMAR TU SELECCIÓN</h2>
          <SlidePrevButton />
          <ul className="result-allergies">
          {userAllergies.map((allergie, index ) => {
            
            return <li key={index}>{allergie}</li>;
          })}
          </ul>
          <button type="submit"><Link to='/Home'></Link>CONFIRMAR</button>
        </SwiperSlide>
      </Swiper>
    </form>
  );
}
