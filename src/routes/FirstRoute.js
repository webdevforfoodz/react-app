import React from 'react';
import Waifu from '../assets/logo-holding-waifu.png'
import logo from '../assets/logo.png'
import '../css/firstroute.css'
import '../css/rarityfilter.css'
import Gallery from '../components/Gallery.js'
import Wave from "../components/WaveBackground.js";
import NavBar from "../components/NavBar.js"

function FirstRoute() {
    return(
        <>
            <div className="first-route">
                <NavBar />
                <div className="first-route-box">
                    <Gallery />
                    <Wave />
                    <div className="first-route-img-wrapper" >
                        <img src={logo} className="first-route-logo" alt="logo"/>
                        <img src={Waifu} className="first-route-waifu" alt="first-route-waifu" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstRoute;