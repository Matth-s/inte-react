import React from 'react';
import { useLocation } from 'react-router-dom';

import tech from '../assets/images/our-tech.jpg';
import integrity from '../assets/images/our-integrity.jpg';
import community from '../assets/images/our-community.jpg';

const Arguments = () => {

    const location = useLocation();

    let title;

    switch(location.pathname) {
        case "/about":
            title = "Our values";
            break;

        case "/careers":
            title = "Why join us?";
            break;

        default :
            break;
    }

    return (
        <div className='container-arguments'>
            <h2>{title}</h2>

            <div className='container-section'>
                <section>
                    <div className='circle'>
                        <h3>01</h3>
                    </div>
                    <img src={tech} alt="tech illustration" />
                    <h3>Our tech</h3>
                    <p>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                </section>

                <section>
                    <div className='circle'>
                        <h3>02</h3>
                    </div>
                    <img src={integrity} alt="integrity illustration" />
                    <h3>Our integrity</h3>
                    <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                </section>

                <section>
                    <div className='circle'>
                        <h3>03</h3>
                    </div>
                    <img src={community} alt="community illustration" />
                    <h3>Our community</h3>
                    <p>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                </section>
            </div>
        </div>
    );
};

export default Arguments;