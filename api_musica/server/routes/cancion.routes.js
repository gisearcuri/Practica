import { Router } from "express";
import controladorCancion from "../controllers/canciones.controller.js";


const routeCancion = Router();



routeCancion.get('/',controladorCancion.verificarCancion)




export default routeCancion;