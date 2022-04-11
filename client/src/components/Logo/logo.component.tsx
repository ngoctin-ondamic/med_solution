import React from 'react'
import { ILogo } from '../../models/styles/logo.model'
import '../Logo/logo.style.scss'
const Logo = (logo : ILogo) => {
  return (
    <div className='logo' >
        <div className='logo__circle'></div>
        <div className='logo__content' style={{color : logo.color}} >
          Medsolutions
        </div>
    </div>
  )
}

export default Logo