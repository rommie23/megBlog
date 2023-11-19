import React from 'react'
import img from '../assets/react.svg'
function Logo({width = '100px'}) {
  return (
    <div>
      <img className='mx-auto' src={img} alt="logo"/>
    </div>
  )
}

export default Logo
