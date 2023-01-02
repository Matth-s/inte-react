import React from 'react';

import chevron from '../assets/icons/chevron.svg';

const Faq = () => {
    return (
        <div className='container-faq'>
            <h2>FAQs</h2>

            <div className="element">
                <h2>How it works</h2>

                <div className="containerDivQuestion">                   
                    <div className='div-question'>
                        <section>
                            <h3>How do I download the app?</h3>
                            <img src={chevron} alt="fleche" />
                        </section>
                        <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
                    </div>

                    <div className='div-question'>
                        <section>
                            <h3>Can I find a nearby Scoots?</h3>
                            <img src={chevron} alt="fleche" />
                        </section>
                    </div>

                    <div className='div-question'>
                        <section>
                            <h3>Do I need a license to ride?</h3>
                            <img src={chevron} alt="fleche" />
                        </section>
                    </div>
                </div>
            </div>


            <div className="element">
                <h2>Safe driving</h2>

                <div className="containerDivQuestion">                   
                    <div className='div-question'>
                        <section>
                            <h3>Should I wear a helmet?</h3>
                            <img src={chevron} alt="fleche" />
                        </section>
                        <p>Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.</p>
                    </div>

                    <div className='div-question'>
                        <section>
                            <h3>How about the rules & regulations?</h3>
                            <img src={chevron} alt="fleche" />
                        </section>
                    </div>

                    <div className='div-question'>
                        <section>
                            <h3>What if I damage my Scoot?</h3>
                            <img src={chevron} alt="fleche" />
                        </section>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Faq;