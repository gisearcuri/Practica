import { Link , useNavigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

const NavBar = ({ setLogin }) => {

    const navigate = useNavigate();
    const cerrarSesion = () => {
        localStorage.removeItem("token");
        setLogin(false);
        navigate('/login');
    };

    return (
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid justify-content-around w-100">
                    <h1>Bebidas</h1>
                    <Link className="navbar-brand" to="/bebidas">Bebidas</Link>
                    <Link className="navbar-brand" to="/bebidas/nueva">Agregar bebida</Link>

                    <button 
                        className="btn btn-secondary" 
                        onClick={cerrarSesion}
                    >
                        Cerrar sesión
                    </button>
                </div>
            </nav>
    );
};

export default NavBar;