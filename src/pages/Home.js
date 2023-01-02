import React from 'react';

import Header from '../components/Header';
import Download from '../components/Download';
import Hero from '../components/Hero';
import Explication from '../components/Explication';
import Footer from '../components/Footer';
import Description from '../components/Description';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Description />
            <Explication />
            <Download />
            <Footer />            
        </>
    );
};

export default Home;