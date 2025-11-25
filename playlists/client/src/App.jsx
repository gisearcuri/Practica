import { useState } from 'react'
import { Routes , Route , Link , NavLink } from 'react-router-dom'
import './App.css'
import CancionesApi from './components/cancionesapi'
import Canciones from './components/Canciones'
import NavBar from './components/NavBar'
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


function App() {
  const [listaCanciones, setListaCanciones] = useState([])
  const [listaPlaylists, setListaPlaylists] = useState([])

  return (
    <>
      <h1>Bienvenidos a mis playlists</h1>
      <CancionesApi setListaCanciones={setListaCanciones}/>
      <PlaylistApi setListaPlaylists={setListaPlaylists}/>
      <NavBar/>
      <Routes>
        < Route  path='/' element={ <div><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm0ycXJ5d3ViNmdiNTVlYnB4Z243eHoxenBmbHB3Y2hocm44NDRqZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/blSTtZehjAZ8I/giphy.gif"></img></div>}></Route>
        < Route  path='/canciones' element={ < Canciones listaCanciones={listaCanciones}/> }></Route>
        < Route path='/playlist' element={ < Playlists listaPlaylists={listaPlaylists}/> }></Route> 
        < Route  path='/canciones/:id' element={ < Cancion listaCanciones={listaCanciones} setListaCanciones={setListaCanciones} />}></Route>
        < Route path='/playlist/:id' element={ <Playlist listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists}/> }></Route> 
        < Route path='/canciones/nueva' element={ <FormularioCanciones listaCanciones={listaCanciones} setListaCanciones={setListaCanciones} />}></Route>
        < Route path='/playlist/nueva' element={ <FormularioPlaylist listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists} listaCanciones={listaCanciones}  />}></Route>
        < Route path='/canciones/update/:id' element={ <UpdateCancionesForm listaCanciones={listaCanciones} setListaCanciones={setListaCanciones}/> }></Route>
        < Route path='/playlist/update/:id' element={ <UpdatePlaylistsForm listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists} /> }></Route>
        < Route  path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
