import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Error404 from './components/Error404'
import GrafFactoresParentales from './components/Graficas/GrafFactoresParentales'
import GrafSatisfaccionIngreso from './components/Graficas/GrafSatisfaccionIngreso'
import Home from './components/home/Home'
import Sidebar from './components/nav/Sidebar'
import Predictor from './components/predictor/Predictor'
import GraficasPrediccionPlotly from './components/Graficas/GraficasPrediccionPlotly'
import Soporte from './components/Soporte'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Sidebar componente={Home} />} />
        <Route path='GraficasComparativasPlotly' element={<Sidebar componente={GraficasPrediccionPlotly} />} />
        <Route path='GrafFactoresParentales' element={<Sidebar componente={GrafFactoresParentales} />} />
        <Route path='GrafIngresoEdadGenero' element={<Sidebar componente={GrafSatisfaccionIngreso} />} />
        <Route path="predictor" element={<Sidebar componente={Predictor} />} />
        <Route path='soporte' element={<Sidebar componente={Soporte} />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
