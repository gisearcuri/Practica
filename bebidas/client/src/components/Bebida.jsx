import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Bebida = ({cerrarSesion}) => {
    const { id } = useParams();
    const [persona, setPersona] = useState({})
    const [errors, setErrors] = useState('')

    const navigate = useNavigate();

    const getData = ()=>{
        const URL = `http://localhost:8000/api/bebidas/${id}`
        axios(URL, {headers : {token_usuario : localStorage.getItem("token")}}).then(response =>
            setPersona(response.data)
        ).catch(e => {
                    setErrors(e)
                    if (e.response.status === 401){
                        cerrarSesion()
                        } 
                    }
                ) 
            }

    useEffect(()=>{
        getData()
    },[])


    const updateBebida = ()=>{
        navigate(`/bebidas/update/${id}`)
    }

    return(
        <div className="card p-4" style={{ maxWidth: "850px", margin: "0 auto" }}>
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body text-start">

                        <h5 className="text-muted">Descripción</h5>
                        <p>{persona.descripcion}</p>

                        <h5 className="text-muted mt-4">Ingredientes</h5>
                        <p>{persona.ingredientes}</p>

                        <h5 className="text-muted mt-4">Instrucciones</h5>
                        <p>{persona.instrucciones}</p>

                        <button type="button" className="btn btn-primary mt-3" onClick={updateBebida}>Editar</button>
                    
                    </div>
                                </div>
                
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    
                    <img src={persona.url} className="img-fluid rounded" alt={persona.nombre}/>
                
                </div>

            </div>
        </div>
    )

}

export default Bebida;