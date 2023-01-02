import React from 'react';
import { useLocation } from 'react-router-dom';

import backgroundAbout from '../assets/images/about-hero-desktop.jpg';
import backgroundOthers from '../assets/images/careers-locations-hero-desktop.jpg';
import demiCircle from '../assets/patterns/white-circles.svg';

const PresentationPage = () => {

    const location = useLocation();

    let title;
    let background;

    switch(location.pathname) {
        case "/about":
            title = "About";
            background = backgroundAbout
            break;

        case "/location":
            title = "Location";
            background = backgroundOthers;
            break;

        case "/careers":
            title = "Careers";
            background = backgroundOthers;
            break;

        default:
            title="";
            break;
    }

    return (
        <div className='presentation-page'>
            <h1>{title}</h1>
            <img className='background' src={background} alt="background car" />
            <img className='circle' src={demiCircle} alt="" />
        </div>
    );
};

export default PresentationPage;