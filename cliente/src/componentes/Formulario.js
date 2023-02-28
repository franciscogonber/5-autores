import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Formulario = () => {
    const [name, setName] = useState("");
    const [errores, setErrores] = useState({});
    const inputNombre = useRef();
    const manejarSubmit = (evento) => {
        evento.preventDefault();
        axios.post("http://localhost:8000/api/autores/new",{name}) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
            .then(respuesta => {
                console.log(respuesta);
                setName("");
                inputNombre.current.focus();
            })
            .catch(err => {
                console.log(err);
                setErrores(err.response.data.errors); //errores del backend
                inputNombre.current.focus();
            })
    }

    return (
        <div className='container'>
            <h1>Favorite Authors</h1>
            <Link to = {"/"}>Home</Link>
            <h4>Add an new author</h4>
            <form onSubmit={manejarSubmit} className = "border">
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input value = {name} ref = {inputNombre} onChange={(evento) => setName(evento.target.value)} type="text" className="form-control" id="name"/>
                    {errores.name ? <p className='text-danger'>{errores.name.message}</p>:null}
                </div>
                <Link to={"/"} className="btn btn-primary">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Formulario
