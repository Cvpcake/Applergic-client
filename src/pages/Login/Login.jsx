import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { JwtContext } from "../../shared/contexts/JwtContext";
import { UserContext } from "../../shared/contexts/UserContext";
import { API } from "../../shared/services/api";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const { setJwt } = useContext(JwtContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post('/users/login', formData).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      setJwt(true);
      navigate("/Home");
    });
  };

  return (
    <div>
      <div className="LogImgTitle">
        <img
          className="LogImgTitle__LogApp"
          src="./images/logoAplergic.png"
          alt="logo applergic"
        />
      </div>
      <div className="Context-div">
        <div className="Context-div__text">
          <h3>¡Bienvenido de nuevo!</h3>
          <p>Por favor, introduce tus datos para continuar</p>
        </div>
      </div>
      <div className="ContainerForm">
        <form
          className="ContainerForm__FormLog"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
          <label htmlFor="email"></label>
          <input
            className="ContainerForm__FormLog__input"
            id="email"
            placeholder="Dirección e-mail"
            {...register("email", {
              required: true,
        
            })}
          />
          {/* email: luisam@delasnieves.com */}
          {/* include validation with required or other standard HTML validation rules */}
          <label htmlFor="password"></label>
          <input
          defaultValue='ABCedf123*'
            className="ContainerForm__FormLog__input"
            id="password"
            placeholder="Password"
            type="password"
            autoComplete="on"
            {...register("password", {
              required: true,
              
          
            })}
          />
          {/* defaultValue={'ABCedf123*'} */}
          {/* errors will return when field validation fails  */}
          {/*{errors.exampleRequired && <span>This field is required</span>}*/}
          <input
            className="ContainerForm__FormLog__button"
            type="submit"
            value="Entrar"
          />
        </form>
        <p>¿nuevo en Applergic?</p>
        <Link className="link-register" to="/Register">
          Crea tu cuenta aquí
        </Link>
      </div>
    </div>
  );
}
