import React from 'react';
import HalloweenMain from '../images/halloween_one.png';
import HalloweenTwo from '../images/halloween_two.png';
import HalloweenThree from '../images/halloween_three.png';
import Navigation from './Navigation';

const Halloween = () => (
        <>
        <Navigation />
                <div className="container-fluid">
                        <div className="row">
                                <div className="col-sm-12">
                                        <h1 className="cool-line">Halloween</h1>
                                        <img className="img-fluid img-border" src={HalloweenMain} alt="Halloween" />
                                        <img className="img-fluid img-border" src={HalloweenTwo} alt="Halloween" />
                                        <img className="img-fluid img-border" src={HalloweenThree} alt="Halloween" />
                                </div>
                        </div>
                </div>

        </>
)

export default Halloween;
