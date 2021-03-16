import React from 'react';
import PetentialMain from '../images/petential_one.png';
import PetentialTwo from '../images/petential_two.png';
import PetentialThree from '../images/petential_three.png';
import PetentialFour from '../images/petential_four.png';
import PetentialFive from '../images/petential_five.png';
import PetentialSix from '../images/petential_six.png';
import Navigation from './Navigation';

const Petential = () => (
    <>
        <Navigation />
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12"><h1 className="cool-line">Petential</h1></div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12"> <img className="img-fluid img-border" src={PetentialMain} alt="Petential" /></div>
                <div className="col-lg-4 col-sm-12"><img className="img-fluid img-border" src={PetentialTwo} alt="Petential" /></div>
                <div className="col-lg-4 col-sm-12"><img className="img-fluid img-border" src={PetentialThree} alt="Petential" /></div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12"><img className="img-fluid img-border" src={PetentialFour} alt="Petential" /></div>
                <div className="col-lg-4 col-sm-12"><img className="img-fluid img-border" src={PetentialFive} alt="Petential" /></div>
                <div className="col-lg-4 col-sm-12"><img className="img-fluid img-border" src={PetentialSix} alt="Petential" /></div>
            </div>
        </div>

    </>
)

export default Petential;
