import React from 'react';
import Logo from '../components/Logo.js'

function LeftSide() {
    return(
        <div className="left-side">
            <Logo />
            <nav>
                <ul>
                    <li>Waifus</li>
                    <li>My Waifus</li>
                    <li>Staking</li>
                </ul>
            </nav>
        </div>
    )
}

export default LeftSide;