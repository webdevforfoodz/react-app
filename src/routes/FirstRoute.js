import React from 'react';
import Waifu from '../assets/logo-holding-waifu.png'
import logo from '../assets/logo.png'
import '../css/firstroute.css'

function FirstRoute() {
    return(
        <div>
            <div className="first-route-waifu">
                <img src={logo} className="first-route-logo" alt="logo"/>
                <img src={Waifu} className="first-route-waifu-img" alt="first-route-waifu" />
            </div>
        </div>
    )
}

export default FirstRoute;