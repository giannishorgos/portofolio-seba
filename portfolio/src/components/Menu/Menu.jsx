import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

import {BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs'
import { MdOutlineAlternateEmail} from 'react-icons/md'

const Menu = ({text='Ioannis.', path='/'}) => {

    const socialMediaText = () => {
        return (
            <>
            <span>
                <a href="mailto:giannishorgos@gmail.com">
                    <MdOutlineAlternateEmail />
                </a>
                <a href="https://www.linkedin.com/in/ioannis-s-horgos/" target='_blank'>
                    <BsLinkedin />
                </a>
                <a href="https://github.com/giannishorgos" target='_blank'>
                    <BsGithub />
                </a>
                <a href="https://stackoverflow.com/users/13791379/giannis-horgos" target='_blank'>
                    <BsStackOverflow />
                </a>
            </span>
            </>
        )
    }
    return (
        <div className='menu'>
                <h2 className='menu-icons'>
                    <Link
                        to={path}
                        className='other-menu'
                        style={{ textDecoration: 'none', color: 'white' }}>
                        {text}             
                    </Link>
                    <span>
                        <a href="mailto:giannishorgos@gmail.com">
                            <MdOutlineAlternateEmail />
                        </a>
                        <a href="https://www.linkedin.com/in/ioannis-s-horgos/" target='_blank'>
                            <BsLinkedin />
                        </a>
                        <a href="https://github.com/giannishorgos" target='_blank'>
                            <BsGithub />
                        </a>
                        <a href="https://stackoverflow.com/users/13791379/giannis-horgos" target='_blank'>
                            <BsStackOverflow />
                        </a>
                    </span>
                </h2>

        </div>
    );
};

export default Menu;
