import React, { useState } from 'react';
import HomeButtons from '../../components/Home Buttons/HomeButtons';
import './Projects.css';
import me from '../../assets/me.png';
import emf from '../../assets/emf.png'
import orana from '../../assets/orana.png'
import vroom from '../../assets/car.png'
import Logo from '../../components/Logo/Logo';
import ProjectEntry from '../../components/ProjectEntry/ProjectEntry';
import { FaPython, FaReact } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { GoChevronUp } from 'react-icons/go'
import {SiAngular, SiDocker, SiNginx, SiCss3, SiOpencv, SiMysql, SiLinux} from 'react-icons/si'
import {BsUbuntu} from 'react-icons/bs'
import {AiOutlineHtml5 , AiOutlineGitlab} from 'react-icons/ai'
// import { IoLogoGitlab } from 'react-icons/io'
import { VscAzureDevops } from 'react-icons/vsc'

import Menu from '../../components/Menu/Menu';



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
        <VscAzureDevops
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

    const vroom_icons = [
        <FaPython
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <SiOpencv
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <SiLinux
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
        <AiOutlineGitlab
            style={{
                fontSize: '28pt',
                color: '#14EB97',
                marginRight: '35px',
            }}
        />,
    ]


    const [activeProject, setActiveProject] = useState({active1: true, active2: false, active3: false, active4: false})
    const changeActiveProj = ({id}) => {
        switch(id) {
            case 1:
                setActiveProject({active1: true, active2: false, active3: false, active4: false})
                break
            case 2:
                setActiveProject({active1: false, active2: true, active3: false, active4: false})
                break
            case 3:
                setActiveProject({active1: false, active2: false, active3: true, active4: false})
                break
            case 4: 
                setActiveProject({active1: false, active2: false, active3: false, active4: true})
                break
        }
    }

    const Bullet = ({active=false, onClick}) => {
        return (
            <GoChevronUp onClick={onClick} className={active ? 'arrow-active' : ''} style={{margin: '5px', color: active ? '#14EB97' : 'white', transform: '0.3s ease-in-out', transform: active ? 'rotate(90deg)' : 'rotate(0)'}} />
            )
    }

    const labbro_desc = "LabBro is a comprehensive portal for our lab's check-in/out system. It serves as a centralized platform that collects and analyzes statistics for lab members and the overall lab operations. With interactive graphs and visualizations, LabBro provides insights into member activities, lab occupancy, and usage patterns. The portal also offers engaging minigames and a unique virtual currency system, rewarding members based on their lab engagement. Below, you can see the programming languages and technologies I utilized to bring this innovative project to life."
    const emf_desc = "The EMF Suite is a full-stack web application designed for managing Narda EMF stations and monitoring electromagnetic fields. With its comprehensive functionality, the suite enables administrators to efficiently add, remove, and relocate stations while customizing the portal's settings. The portal provides detailed statistics presented through interactive graphs, allowing users to gain valuable insights into the monitored electromagnetic field data. Each station has its own dedicated page, offering in-depth information and analysis."
    const orana_desc = "Our startup company, Orana, was founded last summer by myself and my colleague-friend. We specialize in developing websites for our clients. Our own journey in building our company's website has been a valuable learning experience. As we managed and organized everything ourselves, we had the freedom to unleash our creativity and explore new possibilities. We gained a wealth of experience, facing various challenges along the way. Our commitment to delivering innovative and imaginative solutions is driven by our passion for web development. We're dedicated to providing high-quality websites to meet our clients' needs. Technologies used:"
    const vroom_desc = "Team VROOM is based in the Department of Electrical and Computer Engineering of the Aristotle University of Thessaloniki in Greece. Is focused on developing autonomous driving solutions for scaled vehicles. Currently, we are participating -for the third time in a row- in the Bosch Future Mobility Challenge organized by the Bosch Engineering Center in Cluj Napoca, Romania. Our ultimate aim is the promotion of research on autonomous driving in academia."
    return (
        <div className='projects'>
            <Logo text='projects.' />
            <Menu />
            <div className='proj-bullets'>
                <Bullet onClick={() => changeActiveProj({id: 1})} active={activeProject.active1}/>
                <Bullet onClick={() => changeActiveProj({id: 2})} active={activeProject.active2}/>
                <Bullet onClick={() => changeActiveProj({id: 3})} active={activeProject.active3}/>
                <Bullet onClick={() => changeActiveProj({id: 4})} active={activeProject.active4}/>


            </div>
            <div className='proj-list'>
                {activeProject.active1 && <ProjectEntry url='https://labbro.gr/' icons={labbro_icons} desc={labbro_desc}/> }
                {activeProject.active2 && <ProjectEntry url='https://emf.arcep.tg/home' shadow={false} icons={emf_icons} header='EMF Suite' project_image={emf} width='90%' desc={emf_desc} /> }
                {activeProject.active3 && <ProjectEntry url='https://orana.gr/' icons={orana_icons} header='Orana.gr' project_image={orana} width='60%' desc={orana_desc} /> }
                {activeProject.active4 && <ProjectEntry url='https://vroom.web.auth.gr/' icons={vroom_icons} header='Vroom Car' project_image={vroom} width='60%' desc={vroom_desc} /> }


            </div>

        </div>
    );
};

export default Projects;
