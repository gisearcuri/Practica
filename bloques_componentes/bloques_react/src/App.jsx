import './App.css'
import TopNav from './components/TopNav'
import Main from './components/Main'
import SideNav from './components/SideNav'

function App() {

  return (
    <>
      <div className='container'>
        <TopNav/>
        <Main/>
        <SideNav/>
      </div>
    </>
  )
}

export default App
