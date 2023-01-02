import React from 'react';
import {NavLink} from "react-router-dom";


import lineRight from '../assets/patterns/right-arrow.svg';
import line from '../assets/patterns/line.svg';
import demiCircle from '../assets/patterns/white-circles.svg';

const Hero = () => {
    return (
        <div className='container-hero'>
            <img className='circle' src={demiCircle} alt="circle decoration" />
            <img className='arrow' src={lineRight} alt="line background" />
            <img className='line' src={line} alt="line background" />
            <section>
                <h1>Scooter sharing made simple</h1>
                <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                <NavLink to="/">
                    <li>Get Scootin</li>
                </NavLink>
            </section>
        </div>
    );
};

export default Hero;