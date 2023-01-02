import React from 'react';

import locate from '../assets/icons/locate.svg';
import scooter from '../assets/icons/scooter.svg';
import ride from '../assets/icons/ride.svg';

const Description = () => {
    return (
        <div className='container-description'>
            <span></span>
            <div className='div-section'>
                <img src={locate} alt="locate" />
                <section>
                    <h3>Locate with app</h3>
                    <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.</p>
                </section>
            </div>

            <div className='div-section'>
                <img src={scooter} alt="scooter" />
                <section>
                    <h3>Pick your scooter</h3>
                    <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                </section>
            </div>

            <div className='div-section'>
                <img src={ride} alt="ride" />
                <section>
                    <h3>Enjoy the ride</h3>
                    <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                </section>
            </div>
        </div>
    );
};

export default Description;