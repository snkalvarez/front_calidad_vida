import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Error404 from './components/Error404'
import GrafFactoresParentales from './components/Graficas/GrafFactoresParentales'
import GrafSatisfaccionIngreso from './components/Graficas/GrafSatisfaccionIngreso'
import Home from './components/Home/Home'
import Sidebar from './components/nav/Sidebar'
import Predictor from './components/predictor/Predictor'
import GrafRandomTestPredic from './components/Graficas/GrafRandomTestPredic'
import GraficasPrediccionRecharts from './components/Graficas/GraficasPrediccionRecharts'
import GraficasPrediccionPlotly from './components/Graficas/GraficasPrediccionPlotly'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Sidebar componente={Home}  /> } />
        <Route path='GraficasComparativasPlotly' element={<Sidebar componente={GraficasPrediccionPlotly}/>} />
        {/** prueba realizada con recharts */}
        {/* <Route path='GraficasComparativasRecharts' element={<Sidebar componente={GraficasPrediccionRecharts}/>} />  */}
        <Route path='GrafFactoresParentales' element={<Sidebar componente={GrafFactoresParentales}/>}/>
        <Route path="predictor" element={ <Sidebar componente={Predictor} /> } />
        <Route path='GrafIngresoEdadGenero' element={ <Sidebar componente={GrafSatisfaccionIngreso}/> }  />
        {/** prueba realizada con react-plotly */}
        {/* <Route path='realvsprediccionrandomforest' element={ <Sidebar componente={GrafRandomTestPredic} /> } /> */}
        <Route path='*' element={ <Error404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
