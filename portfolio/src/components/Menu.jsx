import React from 'react'
import './Menu.css'

const Menu = () => {
    const menu_items = ['Home', 'About Me', 'My Work', 'Working Experience']
    return (
        <div className='menu_container'>
            {menu_items.map(item => <div className='menu-button'>{item}</div>)}
        </div>
    )
}

export default Menu