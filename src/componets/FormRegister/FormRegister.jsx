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
import { Link } from "react-router-dom";

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

 /*  const checkAllergies = (valueAllergic) => {
    if (!userAllergies.includes(valueAllergic)) {
      setUserAllergies({ ...userAllergies, valueAllergic });
    } else {
      userAllergies.splice(valueAllergic);
    }
  }; */

   const handleCheckChildElement = (event) => {
    const newAllergies = [ ...userAllergies, event ];
    
    setUserAllergies(newAllergies);
   
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
              <input name="glutenAllergie" type="checkbox" value="Gluten" {...register("allergies")} />
              <span>Gluten</span>
            </label>
          </div>



          <button type="button" className="checkbox">
            <input
              id="Gluten"
              type="checkbox"
              value="Gluten"
              name="Gluten"
              {...register("allergies")}
            />
            <label htmlFor="Gluten">
              <span className="active">Gluten</span>
            </label>
            
          </button>
          <button type="button" className="checkbox">
            <input
              id="Crustaceos"
              type="checkbox"
              value="Crustaceos"
              name="Crustaceos"
              {...register("allergies")}
            />

            <label htmlFor="Crustaceos">
              <span className="active">Crustaceos</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Lacteos"
              type="checkbox"
              value="Lacteos"
              name="Lacteos"
              {...register("allergies")}
            />
            <label htmlFor="Lacteos">
              <span className="active">Lacteos</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Cacao"
              type="checkbox"
              value="Cacao"
              name="Cacao"
              {...register("allergies")}
            />
            <label htmlFor="Cacao">
              <span className="active">Cacao</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Pescado"
              type="checkbox"
              value="Pescado"
              name="Pescado"
              {...register("allergies")}
            />
            <label htmlFor="Pescado">
              <span className="active">Pescado</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Soja"
              type="checkbox"
              value="Soja"
              name="Soja"
              {...register("allergies")}
            />
            <label htmlFor="Soja">
              <span className="active">Soja</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Frutos de cáscara"
              type="checkbox"
              value="Frutos de cáscara"
              name="Frutos de cáscara"
              {...register("allergies")}
            />
            <label htmlFor="Frutos de cáscara">
              <span className="active">Frutos de cáscara</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Apio"
              type="checkbox"
              value="Apio"
              name="Apio"
              {...register("allergies")}
            />
            <label htmlFor="Apio">
              <span className="active">Apio</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Mostaza"
              type="checkbox"
              value="Mostaza"
              name="Mostaza"
              {...register("allergies")}
            />
            <label htmlFor="Mostaza">
              <span className="active">Mostaza</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Sésamo"
              type="checkbox"
              value="Sésamo"
              name="Sésamo"
              {...register("allergies")}
            />
            <label htmlFor="Sésamo">
              <span className="active">Sésamo</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Sulfitos"
              type="checkbox"
              value="Sulfitos"
              name="Sulfitos"
              {...register("allergies")}
            />
            <label htmlFor="Sulfitos">
              <span className="active">Sulfitos</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Moluscos"
              type="checkbox"
              value="Moluscos"
              name="Moluscos"
              {...register("allergies")}
            />
            <label htmlFor="Moluscos">
              <span className="active">Moluscos</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Altramuces"
              type="checkbox"
              value="Altramuces"
              name="Altramuces"
              {...register("allergies")}
            />
            <label htmlFor="Altramuces">
              <span className="active">Altramuces</span>
            </label>
          </button>
          <button type="button" className="checkbox">
            <input
              id="Setas"
              type="checkbox"
              value="Setas"
              name="Setas"
              {...register("allergies")}
            />
            <label htmlFor="Setas">
              <span className="active">Setas</span>
            </label>
          </button>

          {/*       </ul> */}
          <SlideNextButton3 />
        </SwiperSlide>

        <SwiperSlide>
          <h2>CONFIRMAR TU SELECCIÓN</h2>
          <SlidePrevButton />
          <input type="submit" value="CONFIRMAR"></input>
        </SwiperSlide>
      </Swiper>
    </form>
  );
}
