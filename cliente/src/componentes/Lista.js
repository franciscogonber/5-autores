import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Lista = () => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/autores", {withCredentials:true}) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
      .then(respuesta => {
        setLista(respuesta.data);
        console.log(respuesta);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])// cuando esta vacia [] se ejecuta solo una vez
  const eliminarAutor = (id) => {
    axios.delete("http://localhost:8000/api/autores/delete/" + id)
      .then(res => {
        removeFromDOM(id);
      })
  }
  const removeFromDOM = (id) => {
    setLista(lista.filter(item => item._id !== id));
  }
  return (
    <div className='col-6'>
      <h1>Favorite Authors</h1>
      <Link to={"/new"}>Add an author</Link>
      <h4>We have quotes by: </h4>
      <table className='table border '>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {lista && lista.map((item, index) => {
            return <tr key={index}>
              <td>{item.name}</td>
              <td><Link  className='btn btn-secondary me-3'to={'/edit/' + item._id}>Edit</Link> <button onClick={() => eliminarAutor(item._id)} type="submit" className="btn btn-danger">Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>


    </div>
  )
}

export default Lista
