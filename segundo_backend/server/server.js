//importaciones
import express from 'express'

const app = express();
const PORT = 8081;

const personas = [
    {name: "Luz", edad: 19},
    {name: "Gisela", edad: 27},
    {name: "Bruno", edad: 24},
    {name: "Lucia", edad: 19},
]


//midleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))



//MANEJO DE RUTAS COMPLEJAS 
app.route('/personas2').get((req,res)=>{
    res.send("Te conectaste por GET")}).post((req,res)=>{
        res.send("Te conectaste por el metodo POST")
    })



//RUTAS
app.use(express.static('public'))

app.get('/personas', (req,res)=>{
    res.statusMessage = "todo bien"
    res.status(201).json(personas)
})

app.post('/personas',(req,res)=>{
    console.log(req.body)
    const {nombre, edad} = req.body;
    if(!nombre || !edad){
        res.status(405).json({message: "falta una de las entradas"})
    }
    const nuevaPersona = {nombre, edad}
    personas.push(nuevaPersona)
    res. status(201).json(nuevaPersona)
})


//LISTENER
app.listen(PORT,()=>{
    console.log(`The server is up and running with the port ${PORT}`)
})