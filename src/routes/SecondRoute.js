import React from 'react';
import '../css/secondroute.css'
import Wave from "../components/WaveBackground.js";
import NavBar from "../components/NavBar.js"

function SecondRoute() {
    return(
        <div className="secondroute">
            <NavBar />
            <Wave />
        </div>
    )
}

export default SecondRoute;