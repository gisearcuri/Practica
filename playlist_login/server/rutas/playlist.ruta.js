import {Router} from 'express'
import playlistControlador from '../controlador/playlists.controlador.js'
import validateToken from '../middleware/validateToken.js';


const playlistRuta = Router();

playlistRuta.get('/',validateToken , playlistControlador.getAll)
playlistRuta.post('/',validateToken, playlistControlador.createOne)
playlistRuta.get('/:id',validateToken , playlistControlador.getOne)
playlistRuta.delete('/:id',validateToken , playlistControlador.deleteOne)
playlistRuta.put('/:id',validateToken , playlistControlador.updateOne)

export default playlistRuta;