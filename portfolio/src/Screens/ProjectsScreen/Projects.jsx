import React from 'react';
import HomeButtons from '../../components/Home Buttons/HomeButtons';
import './Projects.css';
import me from '../../assets/me.png';
import Logo from '../../components/Logo/Logo';
import ProjectEntry from '../../components/ProjectEntry/ProjectEntry';
import { SiMysql } from 'react-icons/si';
import { FaPython, FaReact } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';

const Projects = () => {
    const labbro_icons = [
        <FaPython
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <DiDjango
            style={{
                fontSize: '38pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <FaReact
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <SiMysql
            style={{
                fontSize: '32pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
    ];
    return (
        <div className='projects'>
            <Logo text='projects.' />
            <div className='proj-list'>
                <ProjectEntry icons={labbro_icons} />
                {/* <ProjectEntry icons={labbro_icons} /> */}
            </div>
            {/* <div className='welcome-text'>
                <h1>Hi, I'm Ioannis Horgos.</h1>
                <h3>Software developer. Biker. Gym Rat.</h3> 
                <p>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aspernatur dolorum placeat voluptate necessitatibus, magnam ipsum aliquam quasi ut quos, fugiat facilis alias odit perferendis accusantium magni saepe velit recusandae.</p>
                <div className='buttons'>
                    <HomeButtons />
                    <HomeButtons primary={false} text='download cv'/>
                </div>
            </div>
            <div className='profile'>
                <img src={me}></img>
                </div>  */}
        </div>
    );
};

export default Projects;
