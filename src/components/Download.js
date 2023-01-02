import React from 'react';

import appStore from '../assets/icons/app-store.svg';
import googlePlay from '../assets/icons/google-play.svg';

import circle from '../assets/patterns/semi-circles.svg';

const Download = () => {
    return (
        <div className='container-download'>
            <img className='background' src={circle} alt="background circle" />
            <section className='center'>
                <h2>Sign up and Scoot off today</h2>
                <div>
                    <button> <img src={appStore} alt="appStore" /> </button>
                    <button> <img src={googlePlay} alt="google play" /> </button>
                </div>
            </section>            
        </div>
    );
};

export default Download;