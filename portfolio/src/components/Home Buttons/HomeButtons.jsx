import React from 'react'
import './HomeButtons.css'

import {TbDownload} from 'react-icons/tb'

const HomeButtons = ({primary=true, text="projects", bg_color="#14EB97", onClick}) => {
    const button_style = {
        backgroundColor: primary ? bg_color : 'transparent', 
        color: primary ? 'black' : bg_color, 
        border: primary ? 'none' : "3px solid " + bg_color
    }
    return (
        <div onClick={primary ? onClick : () => console.log('download...')} className='button-container' style={button_style}>{ !primary ? <TbDownload style={{margin: '-10px 17px 0 0'}} /> : null } {text.toUpperCase()}</div>
    )
}

export default HomeButtons  