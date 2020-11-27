import React from 'react';
import logo from '../assets/logo.png'

function Title() {
    return(
        <div className="title-img-wrapper">
            <img src={logo} alt="logo" style={{width: '150px'}}/>
            <span>Marketplace</span>
        </div>
    )
}

export default Title;