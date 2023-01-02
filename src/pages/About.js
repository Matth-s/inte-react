import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Download from '../components/Download';
import PresentationPage from '../components/PresentationPage';
import Arguments from '../components/Arguments';
import Explication from '../components/Explication';
import Faq from '../components/Faq';

const About = () => {
    return (
        <>
            <Header />
            <PresentationPage />
            <Explication />
            <Arguments />
            <Faq />
            <Download />
            <Footer />
        </>
    );
};

export default About;