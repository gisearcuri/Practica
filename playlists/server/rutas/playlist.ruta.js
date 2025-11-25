import {Router} from 'express'
import playlistControlador from '../controlador/playlists.controlador.js'


const playlistRuta = Router();

playlistRuta.get('/', playlistControlador.getAll)
playlistRuta.post('/', playlistControlador.createOne)
playlistRuta.get('/:id', playlistControlador.getOne)
playlistRuta.delete('/:id', playlistControlador.deleteOne)
playlistRuta.put('/:id', playlistControlador.updateOne)

export default playlistRuta