import React from 'react'
import "./Vehiculos.css"

function Vehiculos() {
  return (
    <div className='vehiculos'>
      <div className="destacado" id="destacado">
        <h3>Vehiculos destacados</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, illum. Earum repudiandae, iste odit temporibus qui repellendus asperiores dignissimos corrupti.</p>
      </div>
      <div className="cards">
            <div className="card porsche">
                <h2>Porche 991 II GT3 R</h2>

                <ul>
                    <li>Tipo de Motor: Boxer 6 Cilindros</li>
                    <li>Pais: Alemania</li>
                    <li>Marca: Porsche</li>
                    <li>Potencia: 550 HP</li>
                    <li>Disposicion de Motor: Trasera</li>
                    <li>Peso: 1250 kg</li>
                </ul>
            </div>
            <div className="card ferrari">
                <h2>Ferrari 488 GT3 Evo 2020</h2>
                <ul>
                    <li>Tipo de Motor: V8</li>
                    <li>Pais: Italia</li>
                    <li>Marca: Ferrari</li>
                    <li>Potencia: 580 HP</li>
                    <li>Disposicion de Motor: Central</li>
                    <li>Peso: 1230 kg</li>
                </ul>
            </div>
            <div className="card st">
                <h2>Lamborghini Huracan ST Evo 2</h2>
                <ul>
                    <li>Tipo de Motor: V8</li>
                    <li>Pais: Italia</li>
                    <li>Marca: Lamborghini</li>
                    <li>Potencia: 500 HP</li>
                    <li>Disposicion de Motor: Central</li>
                    <li>Peso: 1350 kg</li>
                </ul>
            </div>
            <div className="card m4-gt4">
                <h2>BMW M4 GT4</h2>

                <ul>
                    <li>Tipo de Motor: 4 Cilindros en Linea</li>
                    <li>Pais: Alemania</li>
                    <li>Marca: BMW</li>
                    <li>Potencia: 480 HP</li>
                    <li>Disposicion de Motor: Delantera</li>
                    <li>Peso: 1400 kg</li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Vehiculos