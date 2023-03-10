import React, { useState } from "react";
import "./NavBar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#1" className="nav__brand">
        Ligas ACC
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#2" className="nav__link">
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="#destacado" className="nav__link">
            Destacados
          </a>
        </li>
        <li className="nav__item">
          <a href="#estadistica" className="nav__link">
            Estadisticas
          </a>
        </li>
        <li className="nav__item">
          <a href="#5" className="nav__link">
            Pruebas
          </a>
        </li>
        <li className="nav__item">
          <a href="#6" className="nav__link">
            Registro
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;