import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import './App.css'
import NotasForm from './components/NotasForm'
import { use, useState } from 'react'
import Filter from './components/Filter'
import Nota from './components/Nota'


function App() {
  const [listaNotas, setListaNotas] = useState([])
  const [filter,setFilter] = useState('')

  const listaFiltrada = !filter? listaNotas :listaNotas.filter(nota=> nota.priority==filter)

  return (
    <>
      <div className='card' style={{width:'20rem'}}>
        <div className='card-header'>
          <h1>Notas</h1>
          <NotasForm listaNotas={listaNotas} setListaNotas={setListaNotas}/>
        </div>
        <div className='card-body'>
          < Filter filter={filter} setFilter={setFilter}/>
          <hr/>
          {listaFiltrada.map((nota,index) => <Nota nota={nota.nota}priority={nota.priority} listaNotas={listaNotas} setListaNotas={setListaNotas} index={index}/>)}
        </div>
        <div className='card-footer'></div>
      </div>
    </>
  )
}

export default App
