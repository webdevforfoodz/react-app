import React from 'react';
import logo from '../assets/logo.png'
import '../css/logo.css'

function Title() {
    return(
        <div className="title-img-wrapper">
            {/* <img src={logo} alt="logo" style={{width: '180px'}}/> */}
            <span className="logo-title1">Waifu</span>
            <span className="logo-title" >Marketplace</span>
        </div>
    )
}

export default Title;