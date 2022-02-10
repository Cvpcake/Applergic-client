import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { JwtContext } from '../../shared/contexts/JwtContext';
import { API } from "../../shared/services/api";
<<<<<<< HEAD
import './Login.scss';
=======
import './Login.scss'
import { Link } from "react-router-dom"
>>>>>>> master

export default function Login () {
    const { register, handleSubmit } = useForm();
    const { setJwt } = useContext(JwtContext);

<<<<<<< HEAD
    const onSubmit = formData => {
        API.post('users/login', formData).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            console.log(res.data.token, res.data.user);
            console.log(formData);
=======
    const onSubmit = (formData) => {
        API.post('users/login', formData).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            console.log(res.data)
            console.log(res.config.data)
            console.log(res)
>>>>>>> master
            setJwt(true);
        })
    }

    return (
        <div>
        <div className="LogImgTitle">
            <img className="LogImgTitle__LogApp" src="./images/logoAplergic.png" alt="logo applergic"/>
        </div>
        <div className="Context-div">
            <div className="Context-div__text" >
            <h3>¡Bienvenido de nuevo!</h3>
            <p>Por favor, introduce tus datos para continuar</p>
            </div>
        </div>
        <div className="ContainerForm">
            <form className="ContainerForm__FormLog" onSubmit={handleSubmit(onSubmit)}>

            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="email"></label>
            <input  className="ContainerForm__FormLog__input" 
            id="email" placeholder='Dirección e-mail'
                   {...register("email",{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                {/* email: luisam@delasnieves.com */}
            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password"></label>
            <input  className="ContainerForm__FormLog__input" 
            id="password" placeholder='Password' type="password" 
                   {...register("password",{required: true, 
                   pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/
                   })}/> 
                   {/* defaultValue={'ABCedf123*'} */}
                   {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}
            <input className="ContainerForm__FormLog__button" type="submit" value="Entrar"/>
            </form>
            <p>¿nuevo en Applergic?</p>
            <Link className="link-register" to="/Register">Crea tu cuenta aquí</Link>
        </div>
        </div>
    )
}