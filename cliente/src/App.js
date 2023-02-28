import './App.css';
import Detalle from './componentes/Detalle';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormularioEditar from './componentes/FormularioEditar';
import Registro from './componentes/Registro';
import Login from './componentes/Login';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/autores' element={ <Lista />}></Route>
          <Route path='/new' element={ <Formulario />}></Route>
          <Route path='/edit/:id' element={<FormularioEditar />}></Route>
          <Route path='/registro' element={<Registro />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
