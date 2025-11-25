import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

const FormularioBebidas = ({listaBebidas, setListaBebidas , cerrarSesion}) =>{
    const [data, setData] = useState({
        nombre : "", 
        descripcion : "", 
        ingredientes : "",
        instrucciones : "", 
        url : ""
    })
    const [errors, setErrors] = useState(
        {
        
        }
    )

    const navigate = useNavigate();

    const updateState = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const agregarBebida = (e) =>{
        e.preventDefault();
        const URL = 'http://localhost:8000/api/bebidas'


        axios.post(URL,data, {headers: { token_usuario: localStorage.getItem("token") }}).then(
            response => {
                setListaBebidas([...listaBebidas, response.data])
                navigate('/bebidas')
            }
        ).catch (
            e => {
                console.log("ERROR COMPLETO:", e.response.data);
                if (e.response.status === 401){
                cerrarSesion()
                }    setErrors(e.response.data.errors);
            }
        );
    }

    return(
            <form onSubmit={(e) => agregarBebida(e)}>

                <h1>Ingresar bebida</h1>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={data.nombre} onChange={(e)=>{updateState(e)}}/>
                    {errors?.nombre  && <p style={{color : "red"}}>{errors.nombre}</p>}
                </div>
                <p>Descripcion:</p> 
                <div className="form-floating">                                       
                    <textarea className="form-control" placeholder="Describi la bebida" id="descripcion" style={{height: "100px"}} name="descripcion" value={data.descripcion} onChange={(e)=>{updateState(e)}}>Describi la bebida</textarea>
                    <label htmlFor="descripcion" >Describi la bebida</label>
                    {errors?.descripcion && <p style={{color : "red"}}>{errors.descripcion}</p>}
                </div>
                <p>Ingredientes:</p>
                <div className="form-floating">                    
                    <textarea className="form-control" placeholder="¿Que ingredientes lleva?" id="ingredientes" style={{height: "100px"}}name="ingredientes" value={data.ingredientes} onChange={(e)=>{updateState(e)}}>Ingredientes</textarea>
                    <label htmlFor="ingredientes" >¿Que ingredientes lleva?</label>
                    {errors?.ingredientes && <p style={{color : "red"}}>{errors.ingredientes}</p>}
                </div>
                <p>Instruciones:</p>
                <div className="form-floating">                                        
                    <textarea className="form-control" placeholder="¿Como se hace?" id="instrucciones" style={{height: "100px"}}name="instrucciones" value={data.instrucciones} onChange={(e)=>{updateState(e)}}>Instrucciones</textarea>
                    <label htmlFor="instrucciones" >¿Como se hace?</label>
                    {errors?.instrucciones && <p style={{color : "red"}}>{errors.instrucciones}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">URL a imagen</label>
                    <input type="text" className="form-control" id="url" name="url" value={data.url} onChange={(e)=>{updateState(e)}}/>
                    {errors?.url  && <p style={{color : "red"}}>{errors.url}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
    )
}

export default FormularioBebidas;