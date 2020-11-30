import React from 'react';
import Waifu from '../assets/logo-holding-waifu.png'
import logo from '../assets/logo.png'
import '../css/firstroute.css'
import '../css/rarityfilter.css'
import RarityFilter from '../components/RarityFilter.js'

function FirstRoute() {
    return(
        <>
            <div className="first-route">
                <RarityFilter />
                <div className="first-route-img-wrapper" >
                    <img src={logo} className="first-route-logo" alt="logo"/>
                    <img src={Waifu} className="first-route-waifu" alt="first-route-waifu" />
                </div>
            </div>
        </>
    )
}

export default FirstRoute;