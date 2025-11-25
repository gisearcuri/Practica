import { Link } from "react-router-dom"
import styles from './../css/Home.module.css'

const Home = ({listaGaleria})=> {

    return (
            <>
            <h1>Bienvenido a la Galeria de arte futurista</h1>
            <ul>
                {listaGaleria.map((arte,index)=> <li key={index} className={styles.lista}> <Link to ={`/arte/${index}`}>{arte.nombre}</Link> </li>)}
            </ul>
            </>
    )
}
export default Home;