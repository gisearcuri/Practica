import style from '../css/Invitacion.module.css'
import medidas from '../assets/medidas.png'
const   Invitacion = () => {
    return (
        <div className={style.body}>
            <div className={style.invitacion}>
                <h2>¡Estás invitado a celebrar el cumpleaños de Malvi!</h2>
                <p>Fecha: 15 de Abril de 2026</p>
                <p>Hora: 3:00 PM</p>
                <p>Ubicacion: Belgrano 1197, Dique Lujan</p>
            </div>

            <h4>Le gusta jugar con:</h4>
            <p>Juguetes con movimiento</p>
            <p>Juguetes con luces</p>
            <p>Juguetes que se pueden morder</p>
            <h4>Medidas corporales:</h4>
            <img src={medidas} alt="malvi" width={150} /> 
            <p>Altura: 73cm</p>
            <p>Peso: 10kg</p>
        </div>
    )
}

export default Invitacion;