import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FormularioPlaylist = ({ listaPlaylists, setListaPlaylists, listaCanciones }) => {

    const [nombre, setNombre] = useState("");
    const [cancionesSeleccionadas, setCancionesSeleccionadas] = useState([]); 
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleSongToggle = (id) => {
        setCancionesSeleccionadas(prev =>
            prev.includes(id)
                ? prev.filter(songId => songId !== id)
                : [...prev, id]
        );
    };

    const agregarPlaylist = (e) => {
        e.preventDefault();
        const URL = "http://localhost:8000/api/playlist";

        const data = {
            nombre,
            canciones: cancionesSeleccionadas
        };

        axios.post(URL, data)
            .then(response => {
                setListaPlaylists([...listaPlaylists, response.data]);
                navigate("/playlist");
            })
            .catch(e => {
                console.log("ERROR COMPLETO:", e.response.data);
                if (e.response?.data?.errors) {
                    setErrors(e.response.data.errors);
                }
            });
    };

    return (
        <form onSubmit={agregarPlaylist} className="p-3">
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
            </div>
            <div className="mb-3">
                <h4>Seleccionar Canciones</h4>

                {listaCanciones?.map(song => (
                    <div key={song._id} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={cancionesSeleccionadas.includes(song._id)}
                            onChange={() => handleSongToggle(song._id)}
                        />
                        <label className="form-check-label">
                            {song.titulo} – {song.artista}
                        </label>
                    </div>
                ))}
            </div>

            <button type="submit" className="btn btn-primary mt-3">
                Agregar
            </button>
        </form>
    );
};

export default FormularioPlaylist;