import { Navigate , Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"; // <-- import bootstrap here
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // optional, for JS components like modals
import PiezaArte from './components/PiezaArte';

function App() {

  const listaGaleria = [
    {nombre:'Fuera de este mundo', autor:'Kevin J', img:'https://media.istockphoto.com/id/1467535422/es/foto/concepto-de-amistad.jpg?s=612x612&w=0&k=20&c=InDK6nIHd1vFI8tX-FVyZikfLcSDDqGhhb1jChyeauI='},
    {nombre:'Pacientes holograficos', autor:'Bruno G', img:'https://media.istockphoto.com/id/1388056765/es/vector/iluminaci%C3%B3n-futurista-y-aura-envolvente-brillante-el-efecto-del-juego-de-aumentar-el-nivel-y.jpg?s=612x612&w=0&k=20&c=3X7lqs-7jnHzh9o4x-KB-CBjPn9WRTD7zkkUixjgAMc='},
    {nombre:'Lo alto del dinero', autor:'Becky G', img:'https://media.istockphoto.com/id/1454448091/es/foto/hombre-plantando-bandera-en-montones-de-dinero-en-efectivo.jpg?s=612x612&w=0&k=20&c=tSHH8_7bjjXLwjtHZe5fuq70oR-Hgrmeb6s7Yio8poo='},
    {nombre:'Nada como la privacidad del hogar', autor:'Jevin J', img:'https://media.istockphoto.com/id/1618446911/es/foto/radio-hombre-y-un-guardia-de-seguridad-u-oficial-de-seguridad-al-aire-libre-en-una-carretera.jpg?s=612x612&w=0&k=20&c=X3KjlHQmgeTDR4rvOrJr9FY76o4BOgHmM5LZDrNOc3E='},
    {nombre:'Moverse en la ciudad', autor:'Renato M', img:'https://media.istockphoto.com/id/1780332705/es/foto/tr%C3%A1fico-en-la-ciudad-de-m%C3%A9xico.jpg?s=612x612&w=0&k=20&c=b86CjchrXbitwRTn_yjibjQ7JmTorjZgN7tc4ywUQGE='},
    {nombre:'Diversion de otro planeta', autor:'Arturo I', img:'https://media.istockphoto.com/id/138210023/es/foto/chairoplane.jpg?s=612x612&w=0&k=20&c=GfPBXouJ4q6z4d21kYwQG-Pg596n9WLzVyRR7PqmSHA='},
    {nombre:'Espectaculo de la Galaxia', autor:'Robin W', img:'https://media.istockphoto.com/id/1490441372/es/vector/fondo-vectorial-espacial-con-nebulosa-realista-y-estrellas-brillantes-galaxia-m%C3%A1gica-y.jpg?s=612x612&w=0&k=20&c=Mro8nyG2MWLTNQTi0B4JQDYCnjABKMFxY3D7tB3qqsQ='},
    {nombre:'Taxista', autor:'Ricardo A', img:'https://media.istockphoto.com/id/519870714/es/foto/de-taxi.jpg?s=612x612&w=0&k=20&c=OOl3TSj97dpYGKLcz0MgCAYACTHwYVnzKeWVUWPKhwg='}

  ]

  return (
    <>
      <Routes>
        < Route  path='/' element={ < Navigate to="Home" /> }></Route>
        < Route  path='/home' element={ < Home listaGaleria={listaGaleria}/> }></Route>
        < Route  path='/arte/:id' element={ < PiezaArte listaGaleria={listaGaleria} /> }></Route>
      </Routes>
    </>
  )
}

export default App
