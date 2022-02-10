import React from 'react'
import RegisterPage from '../../componets/FormRegister/FormRegister'
import { useNavigate } from 'react-router-dom';


const Register = () => {
   const navigate = useNavigate()
  
   return (
    <div>
      <RegisterPage afterSubmit={() => navigate('/Home')}/>
    </div>
  )
}

export default Register
