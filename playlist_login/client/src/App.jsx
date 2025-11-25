import { useState } from 'react'
import { Routes , Route , Link , NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import CancionesApi from './components/CancionesApi'
import Canciones from './components/Canciones'
import NavBar from './components/NavBar'
import NavBarLogin from './components/NavBarLogin'
import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import Cancion from './components/Cancion'
import NotFound from './components/NotFound'
import FormularioCanciones from './components/Formulario'
import UpdateCancionesForm from './components/UpdateCancionesForm'
import UpdatePlaylistsForm from './components/UpdatePlaylistsForm'
import Playlists from './components/Playlists'
import PlaylistApi from './components/PlaylistApi'
import Playlist from './components/Playlist'
import FormularioPlaylist from './components/FormularioPlaylist'
import Login from './components/Login'
import Registro from './components/Registro'


function App() {
  const [listaCanciones, setListaCanciones] = useState([])
  const [listaPlaylists, setListaPlaylists] = useState([])
  const [login, setLogin] = useState(false)
  const navigate = useNavigate();
  const cerrarSesion = () =>{
    localStorage.removeItem("token")
    setLogin(false)
    navigate('/login')
  }


  return (
    <>
      <h1>Bienvenidos a mis playlists</h1>
      {login && <button type="button" className="btn btn-secondary" onClick={cerrarSesion}>Cerrar sesion</button>}
      {(login)? <><NavBar/></> : <><NavBarLogin/></>}
      <CancionesApi setListaCanciones={setListaCanciones} login={login} setLogin={setLogin}/>
      <PlaylistApi setListaPlaylists={setListaPlaylists} login={login} setLogin={setLogin}/>
      <Routes>
        < Route  path='/' element={ <div><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm0ycXJ5d3ViNmdiNTVlYnB4Z243eHoxenBmbHB3Y2hocm44NDRqZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/blSTtZehjAZ8I/giphy.gif"></img></div>}></Route>
        < Route  path='/canciones' element={ < Canciones listaCanciones={listaCanciones} login={login} setLogin={setLogin}/> }></Route>
        < Route path='/playlist' element={ < Playlists listaPlaylists={listaPlaylists}/> }></Route> 
        < Route  path='/canciones/:id' element={ < Cancion listaCanciones={listaCanciones} setListaCanciones={setListaCanciones} cerrarSesion={cerrarSesion}/>}></Route>
        < Route path='/playlist/:id' element={ <Playlist listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists}/> }></Route> 
        < Route path='/canciones/nueva' element={ <FormularioCanciones listaCanciones={listaCanciones} setListaCanciones={setListaCanciones} cerrarSesion={cerrarSesion} />}></Route>
        < Route path='/playlist/nueva' element={ <FormularioPlaylist listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists} listaCanciones={listaCanciones} cerrarSesion={cerrarSesion} />}></Route>
        < Route path='/canciones/update/:id' element={ <UpdateCancionesForm listaCanciones={listaCanciones} setListaCanciones={setListaCanciones}/> }></Route>
        < Route path='/playlist/update/:id' element={ <UpdatePlaylistsForm listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists} /> }></Route>
        < Route path='/login' element={< Login setLogin={setLogin} />}/>
        < Route path='/registro' element={<Registro setLogin={setLogin}  />}/>
      </Routes>
    </>
  )
}

export default App
