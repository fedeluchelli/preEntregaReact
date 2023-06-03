import React from 'react'
import "./NavBar.css"

// Componente
import CardWidget from '../CardWidget/CardWidget'


const NavBar = () => {
  return (
    <nav className='NavBar'>
        <ul>
            <li>Inicio</li>
            <li>About</li>
            <li>Contact</li>
            <li><CardWidget /></li>
        </ul>
    </nav>
  )
}

export default NavBar