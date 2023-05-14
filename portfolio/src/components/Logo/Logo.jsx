import React from 'react'
import './Logo.css'

const Logo = ({text='Ioannis.'}) => {
  return (
    <h2 className='logo'>{text}</h2>
  )
}

export default Logo