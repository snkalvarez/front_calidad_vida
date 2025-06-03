import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Error404 from './components/Error404'
import GrafFactoresParentales from './components/Graficas/GrafFactoresParentales'
import GraficasPrediccion from './components/Graficas/GraficasPrediccion'
import GrafSatisfaccionIngreso from './components/Graficas/GrafSatisfaccionIngreso'
import Home from './components/Home/Home'
import Sidebar from './components/nav/Sidebar'
import Predictor from './components/predictor/Predictor'



function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Sidebar componente={Home}  /> } />
        <Route path="prueba" element={ <Sidebar componente={Home} /> } />
        <Route path='GraficasComparativas' element={<Sidebar componente={GraficasPrediccion}/>} />
        <Route path='GrafFactoresParentales' element={<Sidebar componente={GrafFactoresParentales}/>}/>
        <Route path="predictor" element={ <Sidebar componente={Predictor} /> } />
        <Route  path='GrafIngresoEdadGenero' element={ <Sidebar componente={GrafSatisfaccionIngreso}/> }  />
        <Route path='*' element={ <Error404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
