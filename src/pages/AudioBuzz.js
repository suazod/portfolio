import React from 'react';
import AudioBuzzMain from '../images/ab-one.png';
import AudioBuzzTwo from '../images/ab-two.png';
import AudioBuzzThree from '../images/ab-three.png';
import AudioBuzzFour from '../images/ab-four.png';
import Navigation from './Navigation';

const AudioBuzz = () => (
        <>
        <Navigation />
                <div className="container-fluid">
                        <div className="row">
                                <div className="col-sm-12">
                                        <h1 className="cool-line">AudioBuzz</h1>
                                        <img className="img-fluid img-border" src={AudioBuzzMain} alt="audiobuzz" />
                                        <img className="img-fluid img-border" src={AudioBuzzTwo} alt="audiobuzz" />
                                        <img className="img-fluid img-border" src={AudioBuzzThree} alt="audiobuzz" />
                                        <img className="img-fluid img-border" src={AudioBuzzFour} alt="audiobuzz" />
                                </div>
                        </div>
                </div>

        </>
)

export default AudioBuzz;
