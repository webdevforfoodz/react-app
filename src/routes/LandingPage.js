import React from 'react';
import '../css/landingpage.css'
import gate from '../assets/gate.png'
import moon from '../assets/moon.png'
import lantern from '../assets/lantern1.png'
import shywaifu from '../assets/shywaifu.png'
import welcomewaifu from '../assets/welcome-waifu.png'
import { Link } from "react-router-dom";


function LandingPage() {

    return(
        <div className="landingpage" >
            <img className="landingpage-moon" src={moon} alt=""/>
            <div className="landingpage-img-wrapper">
                <div className="landingpage-img-container">
                    <ul className="landingpage-menu" >
                        <Link className="landingpage-link" to='/gallery'  >
                            <li className="landingpage-link">Gallery</li>
                        </Link>
                        <Link className="landingpage-link" to='/mywaifus'  >
                            <li className="landingpage-link">My Waifus</li>
                        </Link>
                        <Link className="landingpage-link" to='/staking'  >
                            <li className="landingpage-link">Staking</li>
                        </Link>
                    </ul>
                    <img className="landingpage-shywaifu" src={shywaifu} alt=""/>
                    <img className="landingpage-welcomewaifu" src={welcomewaifu} alt=""/>
                    <img className="landingpage-lantern" src={lantern} alt=""/>
                    <img className="landingpage-lantern" src={lantern} alt=""/>
                    <img className="landing-gate" src={gate} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;