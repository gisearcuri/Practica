import styles from './../css/Nota.module.css'


const Nota =({nota, priority, listaNotas, setListaNotas, index}) =>{

    const borrarNota =() =>{
        setListaNotas(listaNotas.filter((nota,i)=>i!=index))
    }

    return(
        <div className={`border bg-light ${styles.notaCard}` }>
            <p className='mb-0'>{nota} - <span className={priority==="High"? styles.high : priority=="Low"? styles.low : styles.medium}> {priority} </span></p> 
            <button className={`btn btn-danger ${styles.addBtn1}`} onClick={borrarNota}>Eliminar</button>
        </div>
    )
}
export default Nota;