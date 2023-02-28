import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()
    const manejarSubmit = (evento) => {
        evento.preventDefault();
        axios.post("http://localhost:8000/api/login", {
             email, password
        }, {withCredencials:true, credentials:'include'})
            .then(respuesta => {
                console.log(respuesta);
                navigate("/autores");
            })
            .catch(err => {
                console.log(err);
            })
    }

  return (
    <div>
       <form onSubmit={manejarSubmit} className='col-6 mx-auto'>
        <label htmlFor='' className='form-label'>Email: </label>
        <input type="text" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='' className='form-label'>Password: </label>
        <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
        <button className='btn btn-success mt-3'>Ingresar</button>
      </form>
    </div>
  )
}

export default Login
