import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Detalle = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [producto, setProducto] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/api/productos/" + id) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
      .then(respuesta => {
        setItem(respuesta.data);
        console.log(respuesta);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  const navigate = useNavigate();
  const manejarSubmit = (evento) => {
    evento.preventDefault();
    axios.delete("http://localhost:8000/api/productos/delete/" + id)
      .then(res => {
       navigate("/");
      })
  }
  return (
    <div>
      <h1>Detalle de Producto</h1>
      {item && (
        <div>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <Link to={'/'+item._id+'/edit'} className="btn btn-secondary">Editar</Link>
          <button onClick={manejarSubmit} type="submit" className="btn btn-danger">Delete</button>
        </div>
      )}
    </div>
  )
}

export default Detalle
