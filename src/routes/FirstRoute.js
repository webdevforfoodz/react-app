import React from 'react';
import Waifu from '../assets/logo-holding-waifu.png'
import logo from '../assets/logo.png'

function FirstRoute() {
    return(
        <div>
            <div className="first-route-waifu">
                <img src={logo} className="first-route-logo" alt="logo" style={{width: '250px'}}/>
                <img src={Waifu} alt="first-route-waifu" />
            </div>
        </div>
    )
}

export default FirstRoute;