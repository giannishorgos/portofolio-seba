import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

const Menu = ({text='Ioannis.', path='/'}) => {
    return (
        <div className='menu'>

                <h2 className='menu-icons'>
                    <Link
                        to={path}
                        style={{ textDecoration: 'none', color: 'white' }}>
                        {text}
                    </Link>
                </h2>

        </div>
    );
};

export default Menu;
