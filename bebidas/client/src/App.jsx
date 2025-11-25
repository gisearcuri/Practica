import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import NavBarLogin from './components/NavBarLogin'
import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import Login from './components/Login'
import Registro from './components/Registro'
import Bebidas from './components/Bebidas'
import BebidasApi from './components/BebidasApi'
import Bebida from './components/Bebida'
import Formulario from './components/Formulario'
import UpdateBebidasForm from './components/UpdateBebidasForm'


function App() {
  const [listaBebidas, setListaBebidas] = useState([])
  const [login, setLogin] = useState(false)
  const [me, setMe] = useState({})
  const navigate = useNavigate();
  const cerrarSesion = () =>{
    localStorage.removeItem("token")
    setLogin(false)
    navigate('/login')
  }


  return (
    <>
      <header>
        <div>
          {(login)? <><NavBar setLogin={setLogin}></NavBar> Bienvenid@ {me.nombre} {me.apellido} </> : <><NavBarLogin/></>}
          
        </div>
      </header>
      <BebidasApi setListaBebidas={setListaBebidas} login={login} setLogin={setLogin} cerrarSesion={cerrarSesion} setMe={setMe}/>
      <Routes>
        < Route path='/' element={ <div><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm0ycXJ5d3ViNmdiNTVlYnB4Z243eHoxenBmbHB3Y2hocm44NDRqZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/blSTtZehjAZ8I/giphy.gif"></img></div>}></Route>
        < Route path='/login' element={< Login setLogin={setLogin} />}/>
        < Route path='/registro' element={<Registro setLogin={setLogin}  />}/>
        < Route path='/bebidas' element={ < Bebidas listaBebidas={listaBebidas} setListaBebidas={setListaBebidas} login={login} setLogin={setLogin} cerrarSesion={cerrarSesion}/> }></Route>
        < Route path='/bebidas/:id' element={ < Bebida listaBebidas={listaBebidas} setListaBebidas={setListaBebidas} cerrarSesion={cerrarSesion}/>}></Route>
        < Route path='/bebidas/nueva' element={ <Formulario listaBebidas={listaBebidas} setListaBebidas={setListaBebidas} cerrarSesion={cerrarSesion} />}></Route>
        < Route path='/bebidas/update/:id' element={ <UpdateBebidasForm listaBebidas={listaBebidas} setListaBebidas={setListaBebidas} cerrarSesion={cerrarSesion} /> }></Route>
      </Routes>
    </>
  )
}

export default App
