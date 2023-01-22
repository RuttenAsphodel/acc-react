import React from 'react'
import NavBar from '../Components/NavBar'
import Vehiculos from './Vehiculos'
import Estadisticas from './Estadisticas'
import Pruebas from './Pruebas'
import './Inicio.css'

function Inicio() {
  return (
    <div>
        <div>
          <NavBar />
          <Vehiculos />
          <Estadisticas />
          <Pruebas />
        </div>
    </div>
  )
  
}

export default Inicio