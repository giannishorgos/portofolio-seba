import React from 'react';
import './Home.css';
import me from '../../assets/me.png'
import Logo from '../../components/Logo/Logo';
import HomeButtons from '../../components/Home Buttons/HomeButtons';

const Home = () => {
    return (
        <div className='home'>
            <div className='welcome-text'>
                <h1>Hi, I'm Ioannis Horgos.</h1>
                <h3>Software developer. Biker. Gym Rat.</h3>
                <p>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aspernatur dolorum placeat voluptate necessitatibus, magnam ipsum aliquam quasi ut quos, fugiat facilis alias odit perferendis accusantium magni saepe velit recusandae.</p>
                <div className='buttons'>
                    <HomeButtons />
                    <HomeButtons primary={false} text='download cv'/>
                </div>
            </div>
            <div className='profile'><img src={me}></img></div>
        </div>
    );
};

export default Home;
