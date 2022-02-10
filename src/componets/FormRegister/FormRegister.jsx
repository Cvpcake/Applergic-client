import React from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import './FormRegister.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from 'swiper';
import {SlideNextButton1, SlideNextButton2, SlideNextButton3, SlidePrevButton} from "../SlideNextButton/SlideNextButton";
import "swiper/css";

// let valueCont = 0

export default function RegisterPage () {
    const { register, handleSubmit } = useForm();

    const onSubmit = formData => {
        console.log(register)
        console.log(formData)
        API.post('users/', formData).then(res => {
            console.log('Register user',)
            console.log(res);
            console.log(formData);
        })}

// useEffect( ()=>{
    
// },[])
    

    return (
        
    <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
            
            {/* SOLUCIONAR...xd */}
            {/* <label htmlFor="image">Imagen</label>
            <input type="file" id="image" 
                   {...register("file")} /> */}
        <Swiper
        modules={[Pagination,Navigation,Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        className="swiperForm"
        >
                   
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
            <SlideNextButton1/>
        </SwiperSlide> 
            
        <SwiperSlide>
                <label htmlFor="nameContact" >Nombre Completo de tu contacto</label>
                <input id="nameContact" defaultValue="Jorge de las Nieves"
                    {...register("nameContact", { required: true })}/>

                <label htmlFor="emailContact">Email del contacto</label>
                <input id="emailContact" defaultValue="jorge@delasnieves.com"
                    {...register("emailContact", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

                <label htmlFor="emergencyContact">Movil del contacto</label>
                <input id="emergencyContact" defaultValue="605605605"
                    {...register("emergencyContact", { required: true })}/>

                <label htmlFor="SecureCompany">Compañía de Seguro del contacto/ Nº de Póliza</label>
                <input id="SecureCompany" defaultValue="Mutua? idk xd"
                    {...register("SecureCompany", { required: true })}/>
                <SlideNextButton2 />
        </SwiperSlide>

        <SwiperSlide>
            <input id="Huevo" type="checkbox" defaultValue="Huevo"
                    {...register("allergies")}/>
            
            <input id="Gluten" type="checkbox"
                    {...register("allergies")}/>
                
            <input id="Lacteos" type="checkbox"
                    {...register("allergies")}/>
            
             <input id="Cacao" type="checkbox"
                    {...register("allergies")}/>
            <SlideNextButton3 />
        </SwiperSlide> 

        <SwiperSlide>
            <h2>CONFIRMAR TU SELECCIÓN</h2>
            <SlidePrevButton/>
            <input type="submit" value="CONFIRMAR"/>
        </SwiperSlide>

        </Swiper>
    </form>
    
        
        
    )
}
