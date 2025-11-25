import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cancion = ({listaCanciones, setListaCanciones, cerrarSesion}) => {
    const [persona, setPersona] = useState({})
    const [errors, setErrors] = useState('')
    const {id} = useParams();
    const URL = `http://localhost:8000/api/canciones/${id}`
    const navigate = useNavigate();

    const getData = ()=>{
        axios(URL, {headers : {token_usuario : localStorage.getItem("token")}}).then(response =>
            setPersona(response.data)
        ).catch(e => {
                    setErrors(e)
                    if (e.status === 401){
                        cerrarSesion()
                        } 
                    }
                ) 
            }

    useEffect(()=>{
        getData()
    },[])


    const borrar= ()=>{
        axios.delete(URL , {headers: { token_usuario: localStorage.getItem("token") }}).then(
            response => {
                setListaCanciones(listaCanciones.filter(cancion => cancion._id != id))
                navigate('/canciones')
            }
        ).catch(
            e => console.log(e)
        )
    }

    const updateCancion = ()=>{
        navigate(`/canciones/update/${id}`)
    }

    return(
        <div>
            <h2>Detalle de cancion:</h2>
            <p> Titulo: {persona.titulo}</p>
            <p> Artista: {persona.artista}</p>
            <p> Lanzamiento : {persona.anioLanzamiento}</p>
            <p> Genero: {persona.genero}</p>
            <button type="submit" className="btn btn-primary" onClick={borrar}>Eliminar</button> || <button type="submit" className="btn btn-primary" onClick={updateCancion}>Editar</button> 
        </div>
    )

}

export default Cancion;