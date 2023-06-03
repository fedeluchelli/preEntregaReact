import React from 'react'
import './ItemListContainer.css'


const ItemListContainer = ({ greeting }) => {
  return (
    <div className='ItemListContainer'>
        <p>Saludo: {greeting}</p>
    </div>
  )
}

export default ItemListContainer