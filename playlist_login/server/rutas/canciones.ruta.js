import {Router} from "express"
import cancionesControlador from "../controlador/canciones.controlador.js"
import validateToken from "../middleware/validateToken.js";

const rutasCanciones = Router();
rutasCanciones.get('/', validateToken , cancionesControlador.getAll )
rutasCanciones.post('/', validateToken , cancionesControlador.createOne)
rutasCanciones.get('/:id', validateToken , cancionesControlador.getOne)
rutasCanciones.delete('/:id',validateToken , cancionesControlador.deleteOne)
rutasCanciones.put('/:id', validateToken , cancionesControlador.updateOne)

export default rutasCanciones; 