import { useState } from "react";

const Formulario = ({listaSups,setlistaSups}) => {
    const arrayData = {
        nombre: "",
        apellido: "",
        correo: "",
        contraseña: "",
        ccontraseña: "",
    }
    const[state, setState] = useState(arrayData)
    const[errores,setErrores] = useState(arrayData)
    
    const updateState = (e)=> {
        setState({...state, [e.target.name]: e.target.value})
        console.log(e.target.type)
    }

    const crearSup = (e)=>{
        e.preventDefault();
        const erroresCopia = {...errores}
        state.nombre.length < 4? (erroresCopia.nombre = "El campo debe tener al menos 4 caracteres") : (erroresCopia.nombre ="");
        state.correo.length < 4? (erroresCopia.correo = "El campo debe tener al menos 10 caracteres") : (erroresCopia.correo ="");
        state.contraseña != state.ccontraseña ? (erroresCopia.ccontraseña= "Las contraseñas no coinciden") : (erroresCopia.ccontraseña="")
        state.correo.length <10 || !state.correo.includes('@') ? (erroresCopia.correo = "El campo es muy corto y debe incluir @") : (erroresCopia.correo)
        state.correo.length <12 ? (erroresCopia.contraseña = "La contraseña debe incluir al menos 12 caracteres") : (erroresCopia.contraseña="")

        if (erroresCopia.nombre || erroresCopia.correo || erroresCopia.contraseña || erroresCopia.ccontraseña){
            setErrores(erroresCopia)
            return;
        }
        
        setlistaSups([...listaSups, state])
        setState(arrayData)
        setErrores(arrayData)
    }

    return (
        <form onSubmit ={(e)=> crearSup(e)}>
            <div className="mb-3">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" value={state.nombre} onChange={(e)=> updateState(e) }></input>
                {errores.nombre && <p style={{color:"red"}}>{errores.nombre}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" name="apellido" id="apellido" value={state.apellido} onChange={(e)=> updateState(e) }></input>
            </div>
            <div className="mb-3">
                <label htmlFor="correo">Correo electronico:</label>
                <input type="text" name="correo" id="correo" value={state.correo} onChange={(e)=> updateState(e) }></input>
                {errores.correo && <p style={{color:"red"}}>{errores.correo}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="contraseña">Contraseña:</label>
                <input type="password" name="contraseña" id="contraseña" value={state.contraseña} onChange={(e)=> updateState(e) }></input>
                {errores.contraseña && <p style={{color:"red"}}>{errores.contraseña}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="ccontraseña">Confirmar contraseña:</label>
                <input type="password" name="ccontraseña" id="ccontraseña" value={state.ccontraseña} onChange={(e)=> updateState(e) }></input>
                {errores.ccontraseña && <p style={{color:"red"}}>{errores.ccontraseña}</p>}
            </div>
            <div>
                <button className="btn btn-primary">Agregar superheroe</button>
            </div>
        </form>
    )
}
export default Formulario;