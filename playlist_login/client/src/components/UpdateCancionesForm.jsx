import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const UpdateCancionesForm = ({ listaCanciones, setListaCanciones }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Buscar la canción seleccionada
    const nuevoArray = listaCanciones.find((cancion) => cancion._id === id);

    const [state, setState] = useState({
        titulo: "",
        artista: "",
        genero: "",
        anioLanzamiento: ""
    });

    const [error, setError] = useState({});

    useEffect(() => {
        if (!nuevoArray) return; // evita error si aún no está cargado
        setState({
            titulo: nuevoArray.titulo,
            artista: nuevoArray.artista,
            genero: nuevoArray.genero,
            anioLanzamiento: nuevoArray.anioLanzamiento
        });
    }, [nuevoArray]);

    // Si no encuentra la canción, redirige
    useEffect(() => {
        if (!nuevoArray) {
            navigate("/canciones");
        }
    }, [nuevoArray, navigate]);

    const updateData = (e) => {
        e.preventDefault();
        const URL = `http://localhost:8000/api/canciones/${id}`;

        axios.put(
            URL,
            state,
            {
                headers: {
                    token_usuario: localStorage.getItem("token")
                }
            }
        )
        .then((response) => {
            // Actualiza lista de canciones
            const nuevaLista = listaCanciones.map((c) =>
                c._id === id ? response.data : c
            );
            setListaCanciones(nuevaLista);

            navigate(`/canciones/${id}`);
        })
        .catch((e) => {
            setError(e.response.data.errors);
        });
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-4">
            <h2>Actualizar Canción</h2>

            <form onSubmit={updateData}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        name="titulo"
                        value={state.titulo}
                        onChange={handleChange}
                    />
                    {error.titulo && <p className="text-danger">{error.titulo}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Artista</label>
                    <input
                        type="text"
                        className="form-control"
                        name="artista"
                        value={state.artista}
                        onChange={handleChange}
                    />
                    {error.artista && <p className="text-danger">{error.artista}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Género</label>
                    <input
                        type="text"
                        className="form-control"
                        name="genero"
                        value={state.genero}
                        onChange={handleChange}
                    />
                    {error.genero && <p className="text-danger">{error.genero}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Año de Lanzamiento</label>
                    <input
                        type="number"
                        className="form-control"
                        name="anioLanzamiento"
                        value={state.anioLanzamiento}
                        onChange={handleChange}
                    />
                    {error.anioLanzamiento && (
                        <p className="text-danger">{error.anioLanzamiento}</p>
                    )}
                </div>

                <button className="btn btn-primary" type="submit">
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
};

export default UpdateCancionesForm;