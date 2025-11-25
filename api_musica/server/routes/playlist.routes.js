import { Router } from "express";
import controladorPlayList from "../controllers/playList.controller.js";

const routePlayList = Router();


routePlayList.get('/', controladorPlayList.obtenerPlayList)


export default routePlayList;