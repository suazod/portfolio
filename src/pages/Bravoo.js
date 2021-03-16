import React from 'react';
import BravooMain from '../images/bravoo_one.png';
import BravooTwo from '../images/bravoo_two.png';
import BravooThree from '../images/bravoo_three.png';
import BravooFour from '../images/bravoo_four.png';
import Navigation from './Navigation';

const Bravoo = () => (
        <>
        <Navigation />
                <div className="container-fluid">
                        <div className="row">
                                <div className="col-sm-12">
                                        <h1 className="cool-line">Bravoo</h1>
                                        <img className="img-fluid img-border" src={BravooMain} alt="Bravoo" />
                                        <img className="img-fluid img-border" src={BravooTwo} alt="Bravoo" />
                                        <img className="img-fluid img-border" src={BravooThree} alt="Bravoo" />
                                        <img className="img-fluid img-border" src={BravooFour} alt="Bravoo" />
                                </div>
                        </div>
                </div>

        </>
)

export default Bravoo;
