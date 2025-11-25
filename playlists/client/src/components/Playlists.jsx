import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import { Link } from 'react-router-dom';


const ListasPlaylists = ({listaPlaylists}) => {
    return (
        <div >
        <ol >
            {listaPlaylists.map((playlist, index) => (
            <li key={index} style={{ listStyle: "none" ,padding: 0}} >
                < Link to={`/playlist/${playlist._id}`}>{playlist.nombre}</Link>
            </li>
            ))}
        </ol>
        </div>
    );
};

export default ListasPlaylists;
