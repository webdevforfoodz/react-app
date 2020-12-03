import React from 'react';
import '../css/secondroute.css'
import Birds from '../components/Birds'
import NavBar from "../components/NavBar.js"

function SecondRoute() {
    return(
        <div className="secondroute">
            <NavBar />
            {/* <Wave /> */}
            <Birds />
        </div>
    )
}

export default SecondRoute;