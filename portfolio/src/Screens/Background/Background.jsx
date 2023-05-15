import React, { useEffect, useState } from 'react'
import './Background.css'

const Background = () => {
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    // console.log(mousePos)

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener(
            'mousemove',
            handleMouseMove
            );
        };
        }, []);
    return (
        <div className='bg-container'>
            <div className='circles-container'>
                <div className='circle purple' style={{top: mousePos.y / 10, left: 100 + mousePos.x / 60}}></div>
                <div className='circle green' style={{top: -mousePos.y / 20, left: -mousePos.x / 130}}></div>
            </div>
        </div>
    )
}

export default Background