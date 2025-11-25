import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import {Link} from 'react-router-dom'


const ListasCanciones = ({listaCanciones}) => {
    return (
        <div >
        <ol >
            {listaCanciones.map((cancion, index) => (
            <li key={index} style={{ listStyle: "none" }}>
                < Link to={`/canciones/${cancion._id}`}>{cancion.titulo}</Link>
            </li>
            ))}
        </ol>
        </div>
    );
};

export default ListasCanciones;