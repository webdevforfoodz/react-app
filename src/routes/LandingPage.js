import React from 'react';
import '../css/landingpage.css'
import gate from '../assets/gate.png'
import moon from '../assets/moon.png'

function LandingPage() {
    return(
        <div className="landingpage" >
            <img className="landingpage-moon" src={moon} alt=""/>
            <div className="landingpage-img-wrapper">
                <img src={gate} alt=""/>
            </div>
        </div>
    )
}

export default LandingPage;