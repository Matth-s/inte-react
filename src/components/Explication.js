import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import telemetry from '../assets/images/telemetry.jpg';
import near from '../assets/images/near-you.jpg';
import payments from '../assets/images/payments.jpg';
import digital from '../assets/images/digital-era.jpg';
import living from '../assets/images/better-living.jpg';
import mission from '../assets/images/join-us.jpg';
import circle from '../assets/patterns/circle.svg';
import line from '../assets/patterns/left-downward-arrow.svg';

const Explication = () => {
    const location = useLocation();
    let components;
    
    const home = 
        <>
            <div className='presentation home'>
                <img className='arrow big' src={line} alt="arrow" />
                <img className="circle" src={circle} alt="circle" />
                <img className='illustration' src={telemetry} alt="telemetry" />
                <section>
                    <h2>Easy to use riding telemetry</h2>
                    <p>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                    <NavLink to='/'>
                        <li>Learn More</li>
                    </NavLink>
                </section>
            </div>

            <div className='presentation home'>
                <img className='arrow left' src={line} alt="arrow" />
                <img className="circle" src={circle} alt="circle" />
                <img className='illustration' src={near} alt="near" />
                <section>
                    <h2>Coming to a city near you</h2>
                    <p>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                    <NavLink to='/'>
                        <li>Learn More</li>
                    </NavLink>
                </section>
            </div>

            <div className='presentation home'>
                <img className='arrow right' src={line} alt="arrow" />
                <img className="circle" src={circle} alt="circle" />
                <img className='illustration' src={payments} alt="near" />
                <section>
                    <h2>Zero hassle payments</h2>
                    <p>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                    <NavLink to='/'>
                        <li>Learn More</li>
                    </NavLink>
                </section>
            </div>
        </>

    const about = 
        <>
            <div className='presentation about'>
                <img className='arrow big up' src={line} alt="arrow" />
                <img className="circle" src={circle} alt="circle" />
                <img className='illustration' src={digital} alt="digital area" />
                <section>
                    <h2>Mobility for the digital era</h2>
                    <p>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                </section>
            </div>

            <div className='presentation about'>
                <img className='arrow left' src={line} alt="arrow" />
                <img className="circle" src={circle} alt="circle" />
                <img className='illustration' src={living} alt="living urban" />
                <section>
                    <h2>Better urban living</h2>
                    <p>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                </section>
            </div>
        </>

    const careers = 
        <>
            <div className='presentation careers'>
                <img className='arrow big' src={line} alt="arrow" />
                <img className="circle" src={circle} alt="circle" />
                <img className='illustration' src={mission} alt="mission" />
                <section>
                    <h2>Care to join our mission?</h2>
                    <p>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
                    <NavLink to='/'>
                        <li>Learn More</li>
                    </NavLink>
                </section>
            </div>
        </>


    switch(location.pathname) {
        case "/":
            components = home;
            break;

        case "/about":
            components = about;
            break;

        case "/careers":
            components = careers;
            break;
        
        default:
            break;
    }

    return (
        <div>
            {components}
        </div>
    );
};

export default Explication;