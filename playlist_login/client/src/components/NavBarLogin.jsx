import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

const NavBarLogin = () => {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid justify-content-center w-100">
                <Link className="navbar-brand" to="/login">Login</Link>
                <Link className="navbar-brand" to="/registro">Registro</Link>
            </div>
        </nav>
    )
}

export default NavBarLogin;