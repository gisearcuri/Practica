import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import './App.css'
import { useState } from 'react'
import ExtraerData from './components/ExtraerData'

function App() {
  const [lista,setLista] = useState([])

  return (
    <>
      <h1>Imagen Random</h1>      
      {lista.map((character,index)=> <img src={character.image} alt={character.name}/>)}
      < ExtraerData setLista ={setLista}/>
    </>
  )
}

export default App