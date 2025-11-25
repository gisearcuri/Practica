import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // optional, for JS components like modals
import Formulario from './components/Formulario';
import { useState } from "react";


function App() {
  const [listaSups,setlistaSups] = useState([])

  return (
    <>
    <header>
      <h1>Bienvenido a la Liga de Superheroes</h1>
      <br/>
      <h4>Registro de Superheroes</h4>
    </header>
    <main>
      <Formulario listaSups= {listaSups} setlistaSups={setlistaSups}/>
    </main>
    <footer>
              {/* {listSups.map((sup,index)=> 
        <div key={index} className="card bg-warning"><p>{sup.name}</p></div>)} */}
        <br/>
        <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
              </tr>
            </thead>  
            <tbody>
              {listaSups.map((sup,index)=> 
              <tr>
                <td>{sup.nombre}</td>
                <td>{sup.apellido}</td>
                <td>{sup.correo}</td>
              </tr>)}
            </tbody>

        </table>

    </footer>

    </>
  )
}

export default App
