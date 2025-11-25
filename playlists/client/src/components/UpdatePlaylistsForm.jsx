import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdatePlaylistsForm = ({ listaPlaylists, setListaPlaylists }) => {

    const emptyDefault = { nombre: "", canciones: [] };

    const [data, setData] = useState(emptyDefault);
    const [songs, setSongs] = useState([]);
    const [formErrors, setFormErrors] = useState({ nombre: "", canciones: "" });
    const [submitError, setSubmitError] = useState("");
    const [formValid, setFormValid] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

  // Cargar canciones del backend
    const fetchSongs = async () => {
        try {
        const res = await axios.get("http://localhost:8000/api/canciones");
        setSongs(res.data);
        } catch (error) {
        console.error("Error cargando canciones", error);
        }
    };

  // Cargar playlist (desde props o backend)
    const fetchPlaylist = async () => {
        let playlist = listaPlaylists.find(p => p._id === id);

    // Si no está en la lista global, traerlo del backend
    if (!playlist) {
        try {
            const res = await axios.get(`http://localhost:8000/api/playlist/${id}`);
            playlist = res.data;
        } catch (e) {
            console.error("Error cargando playlist", e);
        }
    }

    if (playlist) {
        setData({
            nombre: playlist.nombre,
            canciones: playlist.canciones.map(c => c._id ?? c), // soporta objeto o ID
        });
    }
};

    useEffect(() => {
        fetchSongs();
        fetchPlaylist();
    }, [id]);

  // Validación del formulario
    const validateForm = () => {
        let valid = true;
        let errors = { nombre: "", canciones: "" };

    if (!data.nombre.trim()) {
        errors.nombre = "El nombre es obligatorio.";
        valid = false;
        } else if (data.nombre.trim().length < 3) {
            errors.nombre = "Debe tener al menos 3 caracteres.";
            valid = false;
        }

    if (data.canciones.length === 0) {
        errors.canciones = "Debe seleccionar al menos una canción.";
        valid = false;
    }

    setFormErrors(errors);
    setFormValid(valid);
    };

    useEffect(() => {
        validateForm();
    }, [data]);

  // Actualizar nombre
    const updateName = (e) => {
        setData({ ...data, nombre: e.target.value });
    };

  // Agregar o quitar canción
    const toggleSong = (songId) => {
        setData(prev => {
            const songs = prev.canciones.includes(songId)
            ? prev.canciones.filter(id => id !== songId)
            : [...prev.canciones, songId];
            return { ...prev, canciones: songs };
        });
    };

  // Enviar form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError("");

        if (!formValid) return;

        try {
        const res = await axios.put(
            `http://localhost:8000/api/playlist/${id}`,
            data
      );

      // Actualizar lista global
        const index = listaPlaylists.findIndex(p => p._id === id);
        const copia = [...listaPlaylists];
        copia[index] = res.data;
        setListaPlaylists(copia);

        navigate(`/playlist/${id}`);
        } catch (error) {
        console.error(error);
        setSubmitError("Error actualizando la playlist");
    }
};

    return (
        <form onSubmit={handleSubmit} className="container mt-4">

        <h2>Editar Playlist</h2>

        {submitError && <div className="alert alert-danger">{submitError}</div>}

        {/* Nombre */}
        <div className="mb-3">
            <label className="form-label">Nombre de la Playlist</label>
            <input type="text" className="form-control" value={data.nombre} onChange={updateName} />
            {formErrors.nombre && (
                <div className="text-danger">{formErrors.nombre}</div>
            )}
        </div>

      {/* Canciones */}
        <div className="mb-3">
            <h4>Seleccionar Canciones</h4>
            {songs.map(song => (
            <div key={song._id} className="form-check">
                <input className="form-check-input" type="checkbox" checked={data.canciones.includes(song._id)} onChange={() => toggleSong(song._id)} />
            <label className="form-check-label">
                {song.titulo} – {song.artista}
                </label>
            </div>
        ))}
        {formErrors.canciones && (
            <div className="text-danger">{formErrors.canciones}</div>
        )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={!formValid} >
            Guardar Cambios
        </button>
    </form>
    );
};

export default UpdatePlaylistsForm;