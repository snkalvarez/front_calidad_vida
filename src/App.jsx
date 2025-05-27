import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Error404 from './components/Error404'
import Home from './components/Home/Home'
import Sidebar from './components/nav/Sidebar'
import Predictor from './components/predictor/Predictor'



function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Sidebar componente={Home}  /> } />
        <Route path="prueba" element={ <Sidebar componente={Home} /> } />
        <Route path="predictor" element={ <Sidebar componente={Predictor} /> } />
        <Route path='*' element={ <Error404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
