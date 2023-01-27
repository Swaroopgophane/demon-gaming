import React from 'react';
import './Header.css';


import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header className='header'>
        <Link to="/demon-gaming"><h2 className='logo'>DEMON GAMING</h2></Link>
        <nav className='navbar'>
            <ul className='nav-links'>
                <li>
                <Link to="/demon-gaming">Home</Link>
                    </li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        
    </header>
    <Outlet />
    </>
  )
}

export default Header;