import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import './FormRegister.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from 'swiper';
import {SlideNextButton, SlidePrevButton} from "../SlideNextButton/SlideNextButton";
import "swiper/css";



let valueCont = 0

export default function RegisterPage () {
    const { register, handleSubmit } = useForm();
    const [counter, setCounter] = useState(valueCont)
    // counter = 0;


    const onSubmit = (formData) => {
        API.post('users/', formData).then(res => {
            console.log('Register user',)
            console.log(res);
            console.log(formData);
        })
    }

    useEffect(()=>{
        valueCont = 0;
            },[])
    

    return (
        <Swiper
        modules={[Pagination,Navigation,Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        className="swiperForm"
      >
        <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
            
            {/* SOLUCIONAR...xd */}
            {/* <label htmlFor="image">Imagen</label>
            <input type="file" id="image" 
                   {...register("file")} /> */}
                   
            <SwiperSlide>
            
            <label htmlFor="name">Nombre</label>
            <input id="name" defaultValue="Luisa María de las Nieves"
                   {...register("name", { required: true })}/>


            <label htmlFor="email">Email</label>
            <input id="email" defaultValue="luisam@delasnieves.com"
                   {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

            <label htmlFor="phone">Movil</label>
            <input id="phone" defaultValue="605605605"
                    {...register("phone", { required: true })}/>

            <label htmlFor="password">Contraseña</label>
            <input name="password" id="password" type="password" defaultValue="ABCedf123*"
                   {...register("password", {
                       required: true,
                    //    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                   })}/>
            </SwiperSlide>
            
            <SwiperSlide>

                <label htmlFor="nameContact" >Nombre Completo de tu contacto</label>
                <input id="nameContact" defaultValue="Jorge de las Nieves"
                    {...register("nameContact", { required: true })}/>

                <label htmlFor="emailContact">Email del contacto</label>
                <input id="emailContact" defaultValue="luisam@delasnieves.com"
                    {...register("emailContact", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

                <label htmlFor="emergencyContact">Movil del contacto</label>
                <input id="emergencyContact" defaultValue="605605605"
                    {...register("emergencyContact", { required: true })}/>

                <label htmlFor="SecureCompany">Compañía de Seguro del contacto/ Nº de Póliza</label>
                <input id="SecureCompany" defaultValue="Mutua? idk xd"
                    {...register("SecureCompany", { required: true })}/>
            
            
                
            </SwiperSlide>
            <SwiperSlide>
            <input id="allergies" type="checkbox"
                    {...register("allergies")}/>
            
            <input id="allergies" type="checkbox"
                    {...register("allergies")}/>
                
            <input id="allergies" type="checkbox"
                    {...register("allergies")}/>
            
             <input id="allergies" type="checkbox"
                    {...register("allergies")}/>
            
            {counter === 3 ? <SlideNextButton counter={counter} setCounter={setCounter}/> : <></> }
            {console.log('e entrado, counter es: ',counter)}
            </SwiperSlide>

            <SwiperSlide>
            <h2>CONFIRMAR TU SELECCIÓN</h2>
            </SwiperSlide>
            
            
            
        </form>
        <SlideNextButton counter={counter} setCounter={setCounter}/>
        <SlidePrevButton counter={counter} setCounter={setCounter} />
        </Swiper>
    )
}
