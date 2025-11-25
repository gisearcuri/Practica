import {Router} from "express"
import bebidasControlador from "../controlador/bebidas.controlador.js"
import validateToken from "../middleware/validateToken.js";

const rutasBebidas = Router();
rutasBebidas.get('/', validateToken , bebidasControlador.getAll )
rutasBebidas.post('/', validateToken , bebidasControlador.createOne)
rutasBebidas.get('/:id', validateToken , bebidasControlador.getOne)
rutasBebidas.delete('/:id',validateToken , bebidasControlador.deleteOne)
rutasBebidas.put('/:id', validateToken , bebidasControlador.updateOne)

export default rutasBebidas; 