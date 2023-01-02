import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Download from '../components/Download';
import PresentationPage from '../components/PresentationPage';
import Arguments from '../components/Arguments';
import Explication from '../components/Explication';
import Selection from '../components/Selection';

const Careers = () => {
    return (
        <div>
            <Header />
            <PresentationPage />
            <Explication />
            <Arguments />
            <Selection />
            <Download />
            <Footer />
        </div>
    );
};

export default Careers;