import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const UpdateBebidasForm = ({ listaBebidas, setListaBebidas, cerrarSesion }) => {

    const navigate = useNavigate();
    const { id } = useParams();

    const bebidaEditar = listaBebidas.find((bebida) => bebida._id === id);

    const [state, setState] = useState({
        nombre : "", 
        descripcion : "", 
        ingredientes : "",
        instrucciones : "", 
        url : ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!bebidaEditar) return;

        setState({
            nombre: bebidaEditar.nombre,
            descripcion: bebidaEditar.descripcion,
            ingredientes: bebidaEditar.ingredientes,
            instrucciones: bebidaEditar.instrucciones,
            url: bebidaEditar.url
        });

    }, [bebidaEditar]);

    useEffect(() => {
        if (!bebidaEditar) {
            navigate("/bebidas");
        }
    }, [bebidaEditar, navigate]);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const updateData = (e) => {
        e.preventDefault();
        const URL = `http://localhost:8000/api/bebidas/${id}`;

        axios.put(URL, state, {
            headers: {
                token_usuario: localStorage.getItem("token")
            }
        })
        .then((response) => {
            const nuevaLista = listaBebidas.map((bebida) =>
                bebida._id === id ? response.data : bebida
            );

            setListaBebidas(nuevaLista);

            navigate(`/bebidas/${id}`);
        })
        .catch(
            e => {
                console.log("ERROR COMPLETO:", e.response.data);
                if (e.response.status === 401){
                cerrarSesion()
                }    setErrors(e.response.data.errors);
            }
        );
    };

    return (
        <div className="container mt-4">

            <h2>Actualizar bebida</h2>

            <form onSubmit={updateData}>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={state.nombre}
                        onChange={handleChange}
                    />
                    {errors?.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        id="descripcion"
                        name="descripcion"
                        style={{ height: "100px" }}
                        value={state.descripcion}
                        onChange={handleChange}
                    />
                    <label htmlFor="descripcion">Descripción</label>
                    {errors?.descripcion && <p style={{ color: "red" }}>{errors.descripcion}</p>}
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        id="ingredientes"
                        name="ingredientes"
                        style={{ height: "100px" }}
                        value={state.ingredientes}
                        onChange={handleChange}
                    />
                    <label htmlFor="ingredientes">Ingredientes</label>
                    {errors?.ingredientes && <p style={{ color: "red" }}>{errors.ingredientes}</p>}
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        id="instrucciones"
                        name="instrucciones"
                        style={{ height: "100px" }}
                        value={state.instrucciones}
                        onChange={handleChange}
                    />
                    <label htmlFor="instrucciones">Instrucciones</label>
                    {errors?.instrucciones && <p style={{ color: "red" }}>{errors.instrucciones}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">URL a imagen</label>
                    <input
                        type="text"
                        className="form-control"
                        id="url"
                        name="url"
                        value={state.url}
                        onChange={handleChange}
                    />
                    {errors?.url && <p style={{ color: "red" }}>{errors.url}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Editar</button>

            </form>
        </div>
    );
};

export default UpdateBebidasForm;