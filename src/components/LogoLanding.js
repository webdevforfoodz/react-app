import React from 'react';
import '../css/logo1.css'
import {Link} from 'react-router-dom';

function Logo() {
    return(
        <>
        <Link to="/gallery">
            <div className="landing-logo-img-wrapper">
                <span className="landing-logo-title1">Waifu</span>
                <span className="landing-logo-title" >Marketplace</span>
            </div>
        </Link>
        </>
    )
}

export default Logo;