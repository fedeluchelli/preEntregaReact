// React Arrow Function Export Component
//  RAFEC
import React from 'react'

import "./Header.css"

//Imagen
import img from "./Captura de pantalla 2023-05-31 154822.png"

const Header = (props) => {
    console.log(props)
  return (
    <div className='Header'>
        <img src={img} alt="logo-gitHub" className='img' />
    </div>
  )
}

export default Header