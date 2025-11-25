import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'
import rutasBebidas from './rutas/bebidas.ruta.js'
import usuarioRuta from './rutas/usuarios.Ruta.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());


toConnectToBd();    


app.use('/api/bebidas', rutasBebidas)
app.use('/api/usuarios', usuarioRuta)

app.listen(PORT,()=>{
    console.log(`The server is up and running on port ${PORT}`)
})