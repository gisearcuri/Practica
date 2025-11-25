import express from 'express'
import routeCancion from './routes/cancion.routes.js';
import routePlayList from './routes/playlist.routes.js'

const app = express();

const PORT = 8080;


//MIDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//RUTAS

app.use('/api/cancion', routeCancion)
app.use('/api/playList', routePlayList)
app.use(express.static('public'))


//LISTEN
app.listen(PORT,()=> {
    console.log(`The server is up and running with the port ${PORT}`)
})