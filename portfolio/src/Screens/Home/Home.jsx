import React from 'react';
import './Home.css';
import me from '../../assets/me.png'
import Logo from '../../components/Logo/Logo';
import HomeButtons from '../../components/Home Buttons/HomeButtons';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';


const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    console.log(location.pathname)

    const redirectToProjectsScreen = () => {
        console.log('hety')
        navigate('/projects');
    };
    return (
        <div className='home'>
            <Logo />
            <Menu text='projects.' path='/projects'/>
            <div className='welcome-text'>
                <h1>Hi, I'm Ioannis Horgos.</h1>
                <h3>Software developer. Biker. Gym enthousiast.</h3>
                <p>I'm passionate about technology and coding because I believe that every everyday problem holds the potential to inspire us as developers. The thrill of riding my supersport motorcycle fuels my love for adrenaline and the exhilaration of pushing boundaries. In the gym, I've learned that consistency is the key to success, teaching me valuable lessons about discipline and perseverance. Let's embark on this coding journey together, transforming challenges into opportunities and creating impactful solutions.</p>
                <div className='buttons'>
                    <HomeButtons onClick={redirectToProjectsScreen}/>
                    <HomeButtons primary={false} text='download cv'/>
                </div>
            </div>
            <div className='profile'><img src={me}></img></div>
        </div>
    );
};

export default Home;
