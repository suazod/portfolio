import React, { Component } from 'react';
import VideoSample from '../../src/styles/videos/circles.mp4';

class Welcome extends Component {
   
    
    render() {
      
        return (
            <div className="landing-page">
                <header>
                    <div>
                        <div className="overlay"></div>
                        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                            <source src={VideoSample} type='video/mp4' />
                        </video>
                    </div>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">


                            <div className="row no-gutters barcode">
                                <div className="col-12">
                                    <div className="w-100 text-white">
                                        <h1 className="display-3"><span className="main-title">Digital Designer + Developer</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
               
                
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/danny-suazo-18173b59" target="_blank" rel="noopener noreferrer">Linked<span>In</span></a>
                    </div>
                
                <div className="volume-one">
                    <span>V<span className='dot'>.</span>2</span>
                </div>
                
            </div >
        )
    }
}

export default Welcome;