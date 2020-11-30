import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';
import Logo from '../components/Logo.js';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


function NavBar() {

    const linkStyle = {
        textDecoration: 'none'
    }

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => {
      setSidebar(!sidebar);
    }

  return (
    <>
      <div className="burger-menu">
          <FaIcons.FaBars onClick={showSidebar} />
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        {/* <AiIcons.AiOutlineCloseCircle className="nav-menu-close-btn" onClick={showSidebar}/> */}
        <Logo />
        <ul>
          <Link to='/' style={linkStyle} onClick={showSidebar}>
            <li>Waifus</li>
          </Link>
          <Link to='/mywaifus' style={linkStyle} onClick={showSidebar}>
            <li>My Waifus</li>
          </Link>
          <Link to='/staking' style={linkStyle} onClick={showSidebar}>
            <li>Staking</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
