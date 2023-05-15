import React, { useState } from 'react';
import HomeButtons from '../../components/Home Buttons/HomeButtons';
import './Projects.css';
import me from '../../assets/me.png';
import emf from '../../assets/emf.png'
import orana from '../../assets/orana.png'
import Logo from '../../components/Logo/Logo';
import ProjectEntry from '../../components/ProjectEntry/ProjectEntry';
import { SiMysql } from 'react-icons/si';
import { FaPython, FaReact } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { GoChevronUp } from 'react-icons/go'
import {SiAngular, SiDocker, SiNginx, SiCss3} from 'react-icons/si'
import {BsUbuntu} from 'react-icons/bs'
import {AiOutlineHtml5} from 'react-icons/ai'


const Projects = () => {
    const emf_icons = [
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
        <SiAngular
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
        <BsUbuntu
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <SiDocker
            style={{
                fontSize: '32pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <SiNginx
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
    ];

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

    const orana_icons = [
        <FaReact
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <AiOutlineHtml5
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <SiCss3
            style={{
                fontSize: '22pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />
        ];


    const [activeProject, setActiveProject] = useState({active1: true, active2: false, active3: false})
    const changeActiveProj = ({id}) => {
        switch(id) {
            case 1:
                setActiveProject({active1: true, active2: false, active3: false})
                break
            case 2:
                setActiveProject({active1: false, active2: true, active3: false})
                break
            case 3:
                setActiveProject({active1: false, active2: false, active3: true})
                break
        }
    }

    const Bullet = ({active=false, onClick}) => {
        return (
            <GoChevronUp onClick={onClick} style={{fontSize: '18pt', margin: '5px', color: active ? '#14EB97' : 'white', transform: '0.3s ease-in-out', transform: active ? 'rotate(90deg)' : 'rotate(0)'}} />
            )
    }

    return (
        <div className='projects'>
            <Logo text='projects.' />
            <div className='proj-bullets'>
                <Bullet onClick={() => changeActiveProj({id: 1})} active={activeProject.active1}/>
                <Bullet onClick={() => changeActiveProj({id: 2})} active={activeProject.active2}/>
                <Bullet onClick={() => changeActiveProj({id: 3})} active={activeProject.active3}/>

            </div>
            <div className='proj-list'>
                {activeProject.active1 ? <ProjectEntry icons={labbro_icons} /> : <></>}
                {activeProject.active2 ? <ProjectEntry shadow={false} icons={emf_icons} header='EMF Suite' project_image={emf} width='90%' /> : <></>}
                {activeProject.active3 ? <ProjectEntry  icons={orana_icons} header='Orana.gr' project_image={orana} width='60%' /> : <></>}

            </div>

        </div>
    );
};

export default Projects;
