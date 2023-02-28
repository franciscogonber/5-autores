import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const FormularioEditar = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [errores, setErrores] = useState({});
    const inputNombre = useRef();
    useEffect(() => {
        axios.get("http://localhost:8000/api/autores/" + id, {withCredentials:true}) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
            .then(respuesta => {
                setName(respuesta.data.name);
                console.log(respuesta);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])// cuando esta vacia [] se ejecuta solo una vez
    const navigate = useNavigate();
    const manejarSubmit = (evento) => {
        evento.preventDefault();
        axios.put("http://localhost:8000/api/autores/" + id + "/edit", {
            name
        })
            .then(respuesta => {
                console.log(respuesta);
                navigate("/");
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
            <Link to={"/"}>Home</Link>
            <h4>Edit this author</h4>
            <form onSubmit={manejarSubmit} className="border">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input value={name} ref={inputNombre} onChange={(evento) => setName(evento.target.value)} type="text" className="form-control" id="name" />
                    {errores.name &&
                        <div class="alert alert-danger" role="alert">
                            {errores.name.message}
                        </div>
                    }
                    {/*  ? <p className='text-danger'>{errores.name.message}</p>:null} */}
                </div>
                <Link to={"/"} className="btn btn-primary">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default FormularioEditar
