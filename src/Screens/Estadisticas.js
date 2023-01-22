import React from 'react'
import './Estadisticas.css'

function Estadisticas() {
  return (
    <div>

        <div className="estadisticas" id="estadisticas">
        <div className="estadistica">
        <img src={require("../images/icons/user.png")} alt=""/>
            <h4>Pilotos Inscritos</h4>
            <p>2298</p>
        </div>
        <div className="estadistica">
        <img src={require("../images/icons/cars.png")} alt=""/>
            <h4>Carreras Realizadas</h4>
            <p>54</p>
        </div>
        <div className="estadistica">
            <img src={require("../images/icons/flag.png")} alt=""/>
            <h4>Porcentaje de finalizacion</h4>
            <p>76%</p>
        </div>
    </div>
    </div>
  )
}

export default Estadisticas