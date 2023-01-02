import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Download from '../components/Download';
import PresentationPage from '../components/PresentationPage';
import Map from '../components/Map';

const Location = () => {
    return (
        <>
            <Header />
            <PresentationPage />
            <Map />
            <Download />
            <Footer />
        </>
    );
};

export default Location;