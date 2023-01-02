import React from 'react';
import {NavLink} from "react-router-dom";

const Map = () => {
    return (
        <>
            <div className='container-map'>
                <div className='label'>
                    <h3>New York</h3>
                </div>

                <div className='label'>
                    <h3>London</h3>
                </div>

                <div className='label'>
                    <h3>Yokohama</h3>
                </div>

                <div className='label'>
                    <h3>Jakarta</h3>
                </div>
            </div>

            <div className='container-notList'>
                <section>
                    <h2>Your City Not Listed?</h2>
                    <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                    <NavLink to="/">
                        <li>Message Us</li>
                    </NavLink>
                </section>
            </div>

        </>
    );
};

export default Map;