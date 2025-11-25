import styles from './../css/TarjetaProducto.modules.css'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals


const TarjetaProducto = ({nombreProducto, precio, descripcion, enStock})=> {
    return (
    <div className={`card shadow-sm bg-light ${styles.tarjetaProducto}`}> 
        <strong>{nombreProducto}</strong>
        <p>$ {precio}</p>
        <p>{descripcion}</p>
        {enStock==true? <p>En Stock</p>:<p>Agotado</p>}
    </div>)
}

export default TarjetaProducto;