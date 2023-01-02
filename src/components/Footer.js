import React from 'react';
import {NavLink} from "react-router-dom";

import logo from '../assets/logo.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';

const Footer = () => {
    return (
        <footer className='center'>
            <div className="container-footer">
                <nav>
                    <ul className='center'>
                        <NavLink to='/' className='logo'>
                            <li><img src={logo} alt="logo scoot"/></li>
                        </NavLink>

                        <NavLink to='/about'>
                            <li>About</li>
                        </NavLink>

                        <NavLink to='/location'>
                            <li>Location</li>
                        </NavLink>

                        <NavLink to='/careers'>
                            <li>Careers</li>
                        </NavLink>
                    </ul>
                </nav>

                <div className='reseaux'>
                    <NavLink>
                        <li><img src={facebook} alt="facebook"/></li>
                    </NavLink>
                    <NavLink>
                        <li><img src={twitter} alt="twitter"/></li>
                    </NavLink>
                    <NavLink>
                        <li><img src={instagram} alt="instagram"/></li>
                    </NavLink>
                </div> 
            </div>
                      
        </footer>
    );
};

export default Footer;