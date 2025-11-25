import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import axios from "axios"


const UpdateCancionesForm = ({listaCanciones, setListaCanciones})=>{
    const emptyDefault = {titulo:"" , artista:"", anioLanzamiento:"", genero:""}
    const navigate = useNavigate();
    const {id} = useParams();

    const index = listaCanciones.findIndex((cancion)=> cancion._id==id)

    const [data, setData] = useState({...emptyDefault})
        const [errors, setErrors] = useState({})
    const updateState = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const updateCancion = (e)=> {
        e.preventDefault();
        const URL = `http://localhost:8000/api/canciones/${id}`
        axios.put(URL,data).then(
            response => {
                const copiaListaCancion = [...listaCanciones]
                copiaListaCancion[index] = response.data;
                setListaCanciones(copiaListaCancion)
                navigate(`/canciones/${id}`)
            }
        ).catch(
            e=> setErrors(e.response.data.errors)
        )
    }

    useEffect(()=>{
        const nuevoArray = listaCanciones.find((cancion)=> cancion._id==id)
        setData( nuevoArray ? {...nuevoArray}: {...emptyDefault})
    },[listaCanciones,id])

    return(
            <form onSubmit={e=> updateCancion(e)}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="titulo" name="titulo" value={data.titulo} onChange={(e)=>{updateState(e)}}/>
                    {errors.titulo  && <p style={{color : "red"}}>{errors.titulo}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="artista" className="form-label">Artista</label>
                    <input type="text" className="form-control" id="artista" name="artista" value={data.artista} onChange={(e)=>{updateState(e)}}/>
                    {errors.artista  && <p style={{color : "red"}}>{errors.artista}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="anioLanzamiento" className="form-label">Año de lanzamiento</label>
                    <input type="number" className="form-control" id="anioLanzamiento" name="anioLanzamiento"  value={data.anioLanzamiento} onChange={(e)=>{updateState(e)}}/>
                    {errors.anioLanzamiento  && <p style={{color : "red"}}>{errors.anioLanzamiento}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="genero" className="form-label">Genero</label>
                    <input type="text" className="form-control" id="genero" name="genero" value={data.genero} onChange={(e)=>{updateState(e)}}/>
                    {errors.anioLanzamiento  && <p style={{color : "red"}}>{errors.anioLanzamiento}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Editar</button>
            </form>
    )
}

export default UpdateCancionesForm ;