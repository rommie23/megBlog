import React from 'react'
import img from '../assets/lofo.svg'
function Logo({width = '100px'}) {
  return (
    <div>
      <img width={width} className={`mx-auto`} src={img} alt="logo"/>
    </div>
  )
}

export default Logo
