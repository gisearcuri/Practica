import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setLogin}) => {
    const [state, setState] = useState({
        email : '',
        contrasena : ''
    })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const updateState = (e) =>{
        setState({...state, [e.target.name] : e.target.value})
    }
    
    const loginProcess = (e) =>{
        e.preventDefault();
        const URL = 'http://localhost:8000/api/usuarios/login'
        axios.post(URL,state).then(
            response => {
                localStorage.setItem("token", response.data.token)
                setLogin(true)
                setErrors({})
                navigate('/canciones')
            }
        ).catch(e=> setErrors(e.response.data.errors))
    }
    return (
        <form onSubmit={e => loginProcess(e)}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email </label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email"value={state.email} onChange={(e)=> updateState(e)}></input>
                {errors.email  && <p style={{color : "red"}}>{errors.email}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="contrasena"value={state.contrasena} onChange={(e)=> updateState(e)}></input>
                {errors.contrasena  && <p style={{color : "red"}}>{errors.contrasena}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
        </form>
    )
}
export default Login;