import styles from './../css/NotasForm.module.css'
import { useState } from "react";


const NotasForm = ({listaNotas,setListaNotas}) =>{
    const [nota,setNota]= useState('')
    const [priority,setPriority]= useState('')
    const [errores,setErrores]= useState ({nota:'',priority:''})

    const agregarNota = (e) =>{
        e.preventDefault()
        const erroresCopia = {...errores}
        !nota? erroresCopia.nota = "Empty imput" : erroresCopia.nota = '';
        !priority? erroresCopia.priority = "Select not selected" : erroresCopia.priority = '';
        
        if(!nota || !priority ){
            setErrores(erroresCopia)
            return;
        }

        setListaNotas([...listaNotas,{nota, priority}])
        setNota('')
        setPriority('')
        setErrores({nota:'',priority:''}    )
    }

    return(  
        <div>
            <form onSubmit={(e) => agregarNota(e)}>
                <div>
                    <input type="text" placeholder='Escribe tu nota' name="nota" id={styles.nota} value={nota} onChange={e=> setNota(e.target.value)}></input>
                {errores.nota && <p style={{color:"red"}}>{errores.nota}</p>}
                </div>
                <div>
                    <select className="form-select" name="priority" id={styles.priority} value={priority} onChange={e=> setPriority(e.target.value)}>
                        <option value="---">---</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                {errores.priority && <p style={{color:"red"}}>{errores.priority}</p>}
                </div>
                <button className={`btn btn-primary ${styles.addBtn}`} >Agregar nota</button>
            </form>
        </div>
    )
} 

export default NotasForm;