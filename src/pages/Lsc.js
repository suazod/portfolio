import React from 'react';
import LscMain from '../images/lsc_main.png';
import Navigation from './Navigation';

const Lsc = () => (
        <>
        <Navigation />
                <div className="container-fluid">
                        <div className="row">
                                <div className="col-sm-12">
                                        <h1 className="cool-line">Lsc</h1>
                                        <img className="img-fluid img-border" src={LscMain} alt="Lsc" />
                                </div>
                        </div>
                </div>

        </>
)

export default Lsc;
