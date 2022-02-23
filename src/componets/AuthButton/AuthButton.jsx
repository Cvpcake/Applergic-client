import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/contexts/JwtContext";
import './AuthButton.scss';

export default function AuthButton () {
    const {jwt, setJwt} = useContext(JwtContext);
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        navigate("/login");
    }

    return jwt ? (
       
     
            <button className="dropdown-content-btn"
                onClick={signOut}
            ><img className="btn-img" src="./images/exit.png" alt="exit" /><p className="exit-p">Salir</p>
            </button>
        
    ) : (
        <p>You are not logged in.</p>
    );
}
