import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'
import rutasCanciones from './rutas/canciones.ruta.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080;


app.use(express.json())
app.use(express.urlencoded({extended : true}))


toConnectToBd();    


app.use('/api/canciones', rutasCanciones)


app.listen(PORT,()=>{
    console.log(`The server is up and running on port ${PORT}`)
})