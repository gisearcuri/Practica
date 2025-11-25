import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import {Link} from 'react-router-dom'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const ListasBebidas = ({listaBebidas, setListaBebidas,cerrarSesion}) => {
        const navigate = useNavigate();
        const [errors, setErrors] = useState({})
        const borrar= (id)=>{
        const URL = `http://localhost:8000/api/bebidas/${id}`;
        axios.delete(URL , {headers: { token_usuario: localStorage.getItem("token") }}).then(
            response => {
                setListaBebidas(listaBebidas.filter(bebida => bebida._id != id))
                navigate('/bebidas')
            }
        ).catch(
            e => {
                console.log("ERROR COMPLETO:", e.response.data);
                if (e.status === 401){
                cerrarSesion()
                }    setErrors(e.response.data.errors);
            }
        )
    }

    return (
        <div className="d-flex flex-wrap gap-3">
            {listaBebidas.map((bebida, index) => (
            <div className="card" style={{width: "18rem"}} key={index}>
                <img src={bebida.url} className="card-img-top" alt={bebida.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{bebida.nombre}</h5>
                    <p className="card-text">{bebida.descripcion}</p>
                    <Link to={`/bebidas/${bebida._id}`} className="btn btn-primary">Detalle</Link> <button type="submit" className="btn btn-danger" onClick={() => borrar(bebida._id)}>Eliminar</button>
                </div>
            </div>
            ))}
        </div>
    );
};

export default ListasBebidas;