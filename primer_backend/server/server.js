const express = require('express')


//inicializacion de la app
const app = express()
//definicion puerto
const PORT = 8080


//midleware


app.get('/' , (req,res)=>{
    res.send('Hola Malvi')
})




app.listen(PORT, ()=> {
    console.log('The server is up and running')
})