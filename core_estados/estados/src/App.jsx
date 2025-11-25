import './App.css'
import TarjetaProducto from './components/TarjetaProducto'

function App() {
  return (
    <>
      <TarjetaProducto nombreProducto="Laptop" precio="1.500" descripcion="Una potente laptop para trabajar y estudiar" enStock/>
      <TarjetaProducto nombreProducto="Smatphone" precio="800" descripcion="Un smartphone de ultima generacion" enStock/>
      <TarjetaProducto nombreProducto="laptop" precio="1.500" descripcion="Una potente laptop para trabajar y estudiar" enStock/>
    </>
  )
}

export default App
