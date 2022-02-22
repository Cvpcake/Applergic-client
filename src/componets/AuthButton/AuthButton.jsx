import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/contexts/JwtContext";


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
        <div>
     
            <button className="dropdown-img"
                onClick={signOut}
            ><img className="dropdown-img" src="./images/exit.png" alt="exit" /><p className="dropdown-p">Salir</p>
            </button>
        </div>
    ) : (
        <p>You are not logged in.</p>
    );
}
