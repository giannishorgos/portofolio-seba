import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import './Menu.css'

const Menu = () => {
    const menu_items = ['H', 'A', 'M', 'W']
    return (
        <nav className='menu_container'>
            <ul>
                {menu_items.map(item => <div className='nav-buttons'><li className='menu-button'>{item}</li></div>)}
            </ul>
        </nav>
    )
}
// menu etsi anapoda grammata aristera
// deksia koukides
// kai katebainoume pros ta katw
// panw aristera ena kyklaki I/H
// idea from https://gr.pinterest.com/pin/55943220361858385/
export default Menu