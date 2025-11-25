import {Router} from "express"
import cancionesControlador from "../controlador/canciones.controlador.js"

const rutasCanciones = Router();
rutasCanciones.get('/', cancionesControlador.getAll )
rutasCanciones.post('/', cancionesControlador.createOne)
rutasCanciones.get('/:id', cancionesControlador.getOne)
rutasCanciones.delete('/:id', cancionesControlador.deleteOne)
rutasCanciones.put('/:id', cancionesControlador.updateOne)

export default rutasCanciones; 