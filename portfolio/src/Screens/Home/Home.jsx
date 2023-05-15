import React from 'react';
import './Home.css';
import me from '../../assets/me.png'
import Logo from '../../components/Logo/Logo';
import HomeButtons from '../../components/Home Buttons/HomeButtons';
import { unstable_HistoryRouter, useHistory, useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const redirectToProjectsScreen = () => {
        console.log('hety')
        navigate('/projects');
    };
    return (
        <div className='home'>
            <Logo />
            <div className='welcome-text'>
                <h1>Hi, I'm Ioannis Horgos.</h1>
                <h3>Software developer. Biker. Gym Rat.</h3>
                <p>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aspernatur dolorum placeat voluptate necessitatibus, magnam ipsum aliquam quasi ut quos, fugiat facilis alias odit perferendis accusantium magni saepe velit recusandae.</p>
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
