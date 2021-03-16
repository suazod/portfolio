import React from 'react';
import KaraokeMain from '../images/karaoke_one.png';
import KaraokeTwo from '../images/karaoke_two.png';
import KaraokeThree from '../images/karaoke_three.png';
import KaraokeFour from '../images/karaoke_four.png';
import KaraokeFive from '../images/karaoke_five.png';
import Navigation from './Navigation';

const Karaoke = () => (
        <>
        <Navigation />
                <div className="container-fluid">
                        <div className="row">
                                <div className="col-sm-12">
                                        <h1 className="cool-line">Karaoke</h1>
                                        <img className="img-fluid img-border" src={KaraokeMain} alt="Karaoke" />
                                        <img className="img-fluid img-border" src={KaraokeTwo} alt="Karaoke" />
                                        <img className="img-fluid img-border" src={KaraokeThree} alt="Karaoke" />
                                        <img className="img-fluid img-border" src={KaraokeFour} alt="Karaoke" />
                                        <img className="img-fluid img-border" src={KaraokeFive} alt="Karaoke" />
                                </div>
                        </div>
                </div>

        </>
)

export default Karaoke;
