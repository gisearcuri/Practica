import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Playlist = ({listaPlaylists, setListaPlaylists}) => {
    const [persona, setPersona] = useState({ canciones: []})
    const [error, setError] = useState('')
    const {id} = useParams();
    const URL = `http://localhost:8000/api/playlist/${id}`
    const navigate = useNavigate();

    const getData = ()=>{
        axios.get(URL, {
            headers: { token_usuario: localStorage.getItem("token") }
        })
        .then(response => setPersona(response.data))
        .catch(e => setError(e));
    }

    useEffect(()=>{
        getData()
    },[])

    const borrar = ()=>{
        axios.delete(URL, {
            headers: { token_usuario: localStorage.getItem("token") }
        })
        .then(response => {
            setListaPlaylists(listaPlaylists.filter(playlist => playlist._id != id))
            navigate('/playlist')
        })
        .catch(e => console.log(e))
    }

    const updatePlaylist = ()=>{
        navigate(`/playlist/update/${id}`)
    }

    return(
        <div>
            <h2>Detalle de playlist:</h2>
            <p> Nombre: {persona.nombre}</p>
            <p> Canciones:</p>
            <ul>{persona.canciones.map(cancion => (
                <li key={cancion._id}> {cancion.titulo} – {cancion.artista} </li> ))}
            </ul>
            <button type="submit" className="btn btn-primary" onClick={borrar}>Eliminar</button> || 
            <button type="submit" className="btn btn-primary" onClick={updatePlaylist}>Editar</button> 
        </div>
    )
}

export default Playlist;