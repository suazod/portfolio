import React from 'react';
import HiretechMain from '../images/hiretech_one.png';
import HiretechTwo from '../images/hiretech_two.png';
import HiretechThree from '../images/hiretech_three.png';
import HiretechFour from '../images/hiretech_four.png';
import Navigation from './Navigation';

const Hiretech = () => (
        <>
        <Navigation />
                <div className="container-fluid">
                        <div className="row">
                                <div className="col-sm-12">
                                        <h1 className="cool-line">HIREtech</h1>
                                        <img className="img-fluid img-border" src={HiretechMain} alt="Hiretech" />
                                        <img className="img-fluid img-border" src={HiretechTwo} alt="Hiretech" />
                                        <img className="img-fluid img-border" src={HiretechThree} alt="Hiretech" />
                                        <img className="img-fluid img-border" src={HiretechFour} alt="Hiretech" />
                                </div>
                        </div>
                </div>

        </>
)

export default Hiretech;
