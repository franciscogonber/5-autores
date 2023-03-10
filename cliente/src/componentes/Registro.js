import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()
    
    const manejarSubmit = (evento) => {
        evento.preventDefault();
        axios.post("http://localhost:8000/api/registrar", {
            nombre, apellido, email, password, confirmPassword
        }, {withCredencials:true})
            .then(respuesta => {
                console.log(respuesta);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
    }


  return (
    <div>
      <form onSubmit={manejarSubmit} className='col-6 mx-auto'>
        <label htmlFor='' className='form-label'>Nombre: </label>
        <input type="text" className='form-control' onChange={(e)=>setNombre(e.target.value)}/>
        <label htmlFor='' className='form-label'>Apellido: </label>
        <input type="text" className='form-control' onChange={(e)=>setApellido(e.target.value)}/>
        <label htmlFor='' className='form-label'>Email: </label>
        <input type="text" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='' className='form-label'>Password: </label>
        <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
        <label htmlFor='' className='form-label'>Confirm Password: </label>
        <input type="text" className='form-control' onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <button className='btn btn-success mt-3'>Registrate</button>
      </form>
    </div>
  )
}

export default Registro
