import React from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import './FormRegister.scss'

export default function RegisterPage () {
    const { register, handleSubmit } = useForm();


    const onSubmit = (formData) => {
        API.post('users/', formData).then(res => {
            console.log('Register user',)
            console.log(res);
            console.log(formData);
        })
    }


    return (
        <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
            
            {/* SOLUCIONAR... */}
            {/* <label htmlFor="image">Imagen</label>
            <input type="file" id="image" 
                   {...register("file")} />
                   ref={register("file")} */}

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
            
            <input type="submit" value="Guardar perfil"/>
        </form>
    )
}
