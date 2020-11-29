import React from "react";
import Logo from "../components/Logo.js";
import { Link } from "react-router-dom";
import '../css/leftside.css'

function LeftSide() {

    const linkStyle = {
        textDecoration: 'none'
    }

  return (
    <div className="left-side">
      <Logo />
      <nav>
        <ul>
          <Link to='/' style={linkStyle}>
            <li>Waifus</li>
          </Link>
          <Link to='/mywaifus' style={linkStyle}>
            <li>My Waifus</li>
          </Link>
          <Link to='/staking' style={linkStyle}>
            <li>Staking</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default LeftSide;
