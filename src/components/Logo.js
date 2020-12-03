import React from 'react';
// import logo from '../assets/logo.png'
import '../css/logo.css';
import {Link} from 'react-router-dom';

function Logo() {
    return(
        <Link to="/">
            <div className="title-img-wrapper">
                {/* <img src={logo} alt="logo" style={{width: '180px'}}/> */}
                <span className="logo-title1">Waifu</span>
                <span className="logo-title" >Marketplace</span>
            </div>
        </Link>
    )
}

export default Logo;