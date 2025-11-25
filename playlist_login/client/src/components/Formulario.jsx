import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

const FormularioCanciones = ({listaCanciones, setListaCanciones , cerrarSesion}) =>{
    const [data, setData] = useState({
        titulo : "",
        artista : "",
        anioLanzamiento : "",
        genero : ""
    })
    const [errors, setErrors] = useState(
        {
        
        }
    )

    const navigate = useNavigate();

    const updateState = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const agregarCancion = (e) =>{
        e.preventDefault();
        const URL = 'http://localhost:8000/api/canciones'


        axios.post(URL,data, {headers: { token_usuario: localStorage.getItem("token") }}).then(
            response => {
                setListaCanciones([...listaCanciones, response.data])
                navigate('/canciones')
            }
        ).catch (
            e => {
                console.log("ERROR COMPLETO:", e.response.data);
                if (e.status === 401){
                cerrarSesion()
                }    setErrors(e.response.data.errors);
    });
    }

    return(
            <form onSubmit={(e) => agregarCancion(e)}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="titulo" name="titulo" value={data.titulo} onChange={(e)=>{updateState(e)}}/>
                    {errors?.titulo  && <p style={{color : "red"}}>{errors.titulo}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="artista" className="form-label">Artista</label>
                    <input type="text" className="form-control" id="artista" name="artista" value={data.artista} onChange={(e)=>{updateState(e)}}/>
                    {errors?.artista  && <p style={{color : "red"}}>{errors.artista}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="anioLanzamiento" className="form-label">Año de lanzamiento</label>
                    <input type="number" className="form-control" id="anioLanzamiento" name="anioLanzamiento"  value={data.anioLanzamiento} onChange={(e)=>{updateState(e)}}/>
                    {errors?.anioLanzamiento  && <p style={{color : "red"}}>{errors.anioLanzamiento}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="genero" className="form-label">Genero</label>
                    <input type="text" className="form-control" id="genero" name="genero" value={data.genero} onChange={(e)=>{updateState(e)}}/>
                    {errors?.genero  && <p style={{color : "red"}}>{errors.genero}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
    )
}

export default FormularioCanciones;