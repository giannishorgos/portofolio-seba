import React, { useEffect, useRef, useState } from 'react';
import './ProjectEntry.css';
import labbro from '../../assets/mockup.png';
import labbro_menu from '../../assets/phone-menu.png';
import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import {BsGlobe, BsGlobe2} from 'react-icons/bs'

const ProjectEntry = ({
    header = 'LabBro.gr',
    desc = '',
    icons = [],
    project_image = labbro,
    shadow = true,
    width = '50%',
    url='https://labbro.gr/'
}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [visitText, setVisitText] = useState(false)

    const handleImageClick = () => {
        setShowPopup((prev) => !prev);
    };

    return (
        <>
            <div className='proj-entry-container'>
                <div className='proj-text'>
                    <div className='proj-header'><h1>{header.toUpperCase()} </h1><div className='proj-visit'><a href={url} target="_blank"><BsGlobe className='icon' style={{color: '#121312', fontSize: '16pt'}} /><span className='visit-text'>VISIT SITE</span></a></div></div>
                    <p>
                        {desc}
                    </p>
                    <div className='proj-lang-icons'>
                        {icons.map((icon) => icon)}
                    </div>
                </div>
                <div className='proj-image'>
                    <img
                        onClick={handleImageClick}
                        style={{
                            boxShadow: shadow
                                ? '10px 10px 40px #121312, -10px -10px 40px #121312'
                                : '',
                            width: width,
                        }}
                        src={project_image}></img>
                </div>
                {showPopup && (
                    <div className='popup' onClick={handleImageClick}>
                        <img src={project_image} alt='Bigger Image'></img>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectEntry;
