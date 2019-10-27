import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/nav.css';

function Nav() {
  return (
    <nav className="nav">  
      <ul>
        <li>
          <NavLink exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/faq'>Preguntas Frecuentes</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;