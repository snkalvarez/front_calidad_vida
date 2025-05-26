import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/nav/Sidebar'
import Error404 from './components/Error404'
import Prueba from './components/Prueba'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Sidebar /> } />
        <Route path="prueba" element={ <Sidebar componente={Prueba} /> } />
        <Route path='*' element={ <Error404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
