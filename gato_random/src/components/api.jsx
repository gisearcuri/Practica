import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import { useState, useEffect } from 'react';
import axios from 'axios';

const Foto = () => {
    const [fotoGato, setFotoGato] = useState('');
    const [cargando, setCargando] = useState(false);

    useEffect(()=>{
            const obtenerFoto = async () => {
        setCargando(true);
        try {
        const respuesta = await axios.get('https://api.thecatapi.com/v1/images/search');
        setFotoGato(respuesta.data[0].url);
        } catch (error) {
            console.error('Error al obtener la foto:', error);
        } finally {
            setCargando(false);
        }
    }

    obtenerFoto();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Imagen Random</h1>
            <div style={{ marginTop: '20px' }}>
                        {fotoGato && <img src={fotoGato} alt="Foto de un gatito" />}
            </div>
            <button type="button" class="btn btn-info" onClick={obtenerFoto} disabled={cargando}> {cargando ? 'Cargando...' : 'Fetch New Random Image'} </button>
        </div>
    );
};

export default Foto;