import React, { useEffect, useRef, useState } from 'react';
import './ProjectEntry.css';
import labbro from '../../assets/mockup.png';
import labbro_menu from '../../assets/phone-menu.png';
import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';

const ProjectEntry = ({
    header = 'LabBro.gr',
    desc = '',
    icons = [],
    project_image = labbro,
    shadow = true,
    width = '50%',
}) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleImageClick = () => {
        setShowPopup((prev) => !prev);
    };

    return (
        <>
            <div className='proj-entry-container'>
                <div className='proj-text'>
                    <h1>{header.toUpperCase()}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque nemo a dolor incidunt impedit consequatur amet
                        assumenda, ab quo soluta excepturi nisi dolore, corrupti
                        culpa neque doloremque necessitatibus unde officiis?
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
