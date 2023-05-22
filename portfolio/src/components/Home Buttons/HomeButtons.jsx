import React, { useState } from 'react'
import './HomeButtons.css'

import {TbDownload} from 'react-icons/tb'

const HomeButtons = ({primary=true, text="projects", bg_color="#14EB97", onClick}) => {
    const [button_style, setButton_style] = useState({
        backgroundColor: primary ? bg_color : 'transparent', 
        color: primary ? 'black' : bg_color, 
        border: primary ? 'none' : "3px solid " + bg_color
    })

    const hover = (enter) => {
        if(enter) {
            setButton_style({
                backgroundColor: primary ? 'white' : 'transparent', 
                color: primary ? 'black' : 'white', 
                border: primary ? 'none' : "3px solid " + 'white'
            })
        } else {
            setButton_style({
                backgroundColor: primary ? bg_color : 'transparent', 
                color: primary ? 'black' : bg_color, 
                border: primary ? 'none' : "3px solid " + bg_color
            })
        }
    }

    return (
        <div onMouseEnter={() => hover(true)} onMouseLeave={() => hover(false)} onClick={primary ? onClick : () => console.log('download...')} className='button-container' style={button_style}>
            { !primary && (<a href="files/ioannis_horgos_cv.pdf" download><TbDownload style={{margin: '-10px 17px 0 0'}} />  {text.toUpperCase()} </a>) }
            { primary && (<span>{text.toUpperCase()}</span>)}
            </div>
    )
}

export default HomeButtons  