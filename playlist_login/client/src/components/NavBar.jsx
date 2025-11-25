import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

const NavBar = () => {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/canciones">Canciones</Link>
                <Link className="navbar-brand" to="/playlist">Playlists</Link>
                <Link className="navbar-brand" to="/canciones/nueva">Agregar canción</Link>
                <Link className="navbar-brand" to="/playlist/nueva">Agregar playlist</Link>
            </div>
        </nav>
    )
}

export default NavBar;