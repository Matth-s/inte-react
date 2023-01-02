import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import hamburger from '../assets/icons/hamburger.svg';
import close from '../assets/icons/close.svg';
import logo from '../assets/logo.svg'

const Header = () => {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className='center'>
            <nav className='center'>
                <div className="toggle" onClick={handleToggle}>
                    <img className='open' src={hamburger} alt="open menu" />
                    <img className='close' src={close} alt="close menu" />
                </div>

                <NavLink to='/'>
                    <li><img className='logo' src={logo} alt="logo scoot"/></li>
                </NavLink>
                        
                <ul className={isActive ? "responsive" : "remove"}>
                    <NavLink to='/about'>
                        <li>About</li>
                    </NavLink>

                    <NavLink to='/location'>
                        <li>Location</li>
                    </NavLink>

                    <NavLink to='/careers'>
                        <li>Careers</li>
                    </NavLink>

                    <NavLink to='/' className='center'>
                        <li>Get Scootin</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;