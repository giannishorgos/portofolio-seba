import React, { useState } from 'react';
import './ProjectEntry.css';
import labbro from '../../assets/mockup.png';
import labbro_menu from '../../assets/phone-menu.png';
import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';

const ProjectEntry = ({ header = 'LabBro.gr', desc = '' }) => {
    const [activeProject, setActiveProject] = useState(1);
    // const handleNextProject = () => {
    //     setActiveProject(activeProject === 3 ? 1 : activeProject + 1);
    //     console.log('fff');
    //     document.getElementById(`project${activeProject}`).style.opacity = 0;
    //     document.getElementById(
    //         `project${activeProject + 1}`
    //     ).style.opacity = 1;
    // };
    const nextPhoto = () => {
        console.log('rere');
    };
    return (
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
                    <FaPython
                        style={{
                            fontSize: '28pt',
                            color: '#14EB97',
                            marginRight: '35px',
                        }}
                    />
                    <DiDjango
                        style={{
                            fontSize: '38pt',
                            color: '#14EB97',
                            marginRight: '35px',
                        }}
                    />
                    <FaReact
                        style={{
                            fontSize: '28pt',
                            color: '#14EB97',
                            marginRight: '35px',
                        }}
                    />
                    <SiMysql
                        style={{
                            fontSize: '32pt',
                            color: '#14EB97',
                            marginRight: '35px',
                        }}
                    />
                </div>
            </div>
            <div className='proj-image'>
                <img src={labbro}></img>
            </div>
        </div>
    );
};

export default ProjectEntry;
