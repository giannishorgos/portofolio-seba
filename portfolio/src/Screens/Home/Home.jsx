import React from 'react';
import './Home.css';
import me from '../../assets/me.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='welcome-text'>
                <h1>Hi, I'm Ioannis Horgos.</h1>
                <h3>Software developer. Biker. Gym Rat.</h3>
            </div>
            <div className='profile'><img src={me}></img></div>
        </div>
    );
};

export default Home;
