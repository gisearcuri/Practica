import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'
import rutasCanciones from './rutas/canciones.ruta.js'
import playlistRuta from './rutas/playlist.ruta.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080;


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


toConnectToBd();    


app.use('/api/canciones', rutasCanciones)
app.use('/api/playlist',playlistRuta)


app.listen(PORT,()=>{
    console.log(`The server is up and running on port ${PORT}`)
})