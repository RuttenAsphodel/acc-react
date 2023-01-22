import React from 'react'
import './Pruebas.css'

function Pruebas() {
  return (
    <div>
       <div class="banner-race">
            <h1>
                Pruebas Semanales
            </h1>
        </div>
       
        <div className="pruebas" id="pruebas">
            <div className="prueba">        
                <div>
                    <img src={require("../images/categories/gt4-europe.png")} alt=""/>
                </div>

                <div>
                    <table>
                        <tr>
                            <td>Circuito</td>
                            <td>Brands Hatch</td>
                        </tr>
                            <td>Duracion</td>
                            <td>20 minutos</td>
                        <tr>                                        
                            <td>Categoria</td>
                            <td>GT4</td>
                        </tr>
                        <tr>
                            <td>Licencia</td>
                            <td>Rookie</td>
                        </tr>
                    </table>
                </div>
                <div className="link">
                    <a href="#1">Unirse</a>
                </div>
            </div>

            <div className="prueba">
                <div>
                <img src={require("../images/categories/ION_GT3.png")} alt=""/>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Circuito</td>
                            <td>Monza</td>
                        </tr>
                            <td>Duracion</td>
                            <td>30 minutos</td>
                        <tr>                                         
                            <td>Categoria</td>
                            <td>GT3</td>
                        </tr>
                        <tr>
                            <td>Licencia</td>
                            <td>Amateur</td>
                        </tr>
                    </table>
                </div>
                     <div className="link">
                    <a href="#2">Unirse</a>
                </div>
            </div>
            <div className="prueba">
                <div>
                <img src={require("../images/categories/m2cup.png")} alt=""/>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Circuito</td>
                            <td>Laguna Seca</td>
                        </tr>
                            <td>Duracion</td>
                            <td>15 minutos</td>
                        <tr>                                         
                            <td>Categoria</td>
                            <td>M2 Cup</td>
                        </tr>
                        <tr>
                            <td>Licencia</td>
                            <td>Rookie</td>
                        </tr>
                    </table>
                </div>
                     <div class="link">
                    <a href="#3">Unirse</a>
                </div>
            </div>

            <div className="prueba">
                <div>
                <img src={require("../images/categories/Porsche_Mobil_1_Supercup_logo.png")} alt=""/>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Circuito</td>
                            <td>Imola</td>
                        </tr>
                            <td>Duracion</td>
                            <td>30 minutos</td>
                        <tr>                                         
                            <td>Categoria</td>
                            <td>Porsche Supercup</td>
                        </tr>
                        <tr>
                            <td>Licencia</td>
                            <td>Pro</td>
                        </tr>
                    </table>
                </div>
                <div className="link">
                    <a href="#4">Unirse</a>
                </div>
            </div>

            <div className="prueba">
                <div>
                <img src={require("../images/categories/supertrofeo.jpg")} alt=""/>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Circuito</td>
                            <td>Nurburgring</td>
                        </tr>
                            <td>Duracion</td>
                            <td>20 minutos</td>
                        <tr>                                         
                            <td>Categoria</td>
                            <td>SuperTrofeo</td>
                        </tr>
                        <tr>
                            <td>Licencia</td>
                            <td>Amateur</td>
                        </tr>
                    </table>
                </div>
                <div className="link">
                    <a href="#5">Unirse</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Pruebas