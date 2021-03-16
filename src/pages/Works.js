import React from 'react';
import AudioBuzzGif from '../images/audiobuzz.gif';
import PetentialGif from '../images/petential.gif';
import BravooGif from '../images/bravoo.gif';
import HalloweenGif from '../images/halloween.gif';
import KaraokeGif from '../images/karaoke.gif';
import LscGif from '../images/lsc.gif';
import WeatherAppGif from '../images/weatherapp.gif';
import HiretechGif from '../images/hiretech.gif';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Works = () => (
    <>
        <Navigation />
        <div className="container-fluid extra-padder">
            <p className="custom-text">Projects in the works..</p>
            <div className="row no-gutters">
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid gif-border" src={AudioBuzzGif} alt="audiobuzz" />
                    <div className="project-details">
                        <div className="project-title">_audioBuzz</div>
                        <div className="project-desc">Utilized JavaScript/jQuery, Leaflet, WebGL, CSS3, HMTL5, Firebase and Bootstrap</div>
                        <div className="project-link"><Link to="/AudioBuzz">Explore Project</Link></div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid gif-border" src={PetentialGif} alt="petential" />
                    <div className="project-details">
                        <div className="project-title">_petential</div>
                        <div className="project-desc">Utilized JavaScript/jQuery, REACT, Node Js, Express, CSS3, HMTL5, MySQL, Sequelize and Bootstrap</div>
                        <div className="project-link"><Link to="/Petential">Explore Project</Link></div>
                    </div>
                </div>
                                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid gif-border" src={BravooGif} alt="bravoo" />
                    <div className="project-details">
                        <div className="project-title">_bravoo</div>
                        <div className="project-desc">Utilized JavaScript/jQuery, Node Js, Express, Handlebars, Passport, CSS3, HMTL5, MySQL, Sequelize and Bootstrap</div>
                        <div className="project-link"><Link to="/Bravoo">Explore Project</Link></div>
                    </div>
                </div>
            </div>
            <div className="row no-gutters padder-top">

                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid gif-border" src={HalloweenGif} alt="halloween" />
                    <div className="project-details">
                        <div className="project-title">_halloween</div>
                        <div className="project-desc">Utilized JavaScript/jQuery, Firebase, CSS3, HMTL5, and Bootstrap</div>
                        <div className="project-link"><Link to="/Halloween">Explore Project</Link></div>
                    </div>
                </div>
                                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid gif-border" src={KaraokeGif} alt="karaoke" />
                    <div className="project-details">
                        <div className="project-title">_karaoke</div>
                        <div className="project-desc">Utilized JavaScript/jQuery, Firebase, CSS3, HMTL5, and Bootstrap</div>
                        <div className="project-link"><Link to="/Karaoke">Explore Project</Link></div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid gif-border" src={LscGif} alt="LSC microsite" />
                    <div className="project-details">
                        <div className="project-title">_lsc microsite</div>
                        <div className="project-desc">Utilized JavaScript/jQuery, Firebase, CSS3, HMTL5, and Bootstrap</div>
                        <div className="project-link"><Link to="/Lsc">Explore Project</Link></div>
                    </div>
                </div>
            </div>
     
            <div className="row no-gutters padder-top justify-content-md-center">
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid gif-border" src={HiretechGif} alt="HIREtech" />
                    <div className="project-details">
                        <div className="project-title">_hiretech</div>
                        <div className="project-desc">Utilized Joomla CMS, JavaScript/jQuery, Firebase, CSS3, HMTL5, and Bootstrap</div>
                        <div className="project-link"><Link to="/Hiretech">Explore Project</Link></div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid gif-border" src={WeatherAppGif} alt="weather app" />
                    <div className="project-details">
                        <div className="project-title">_weather app</div>
                        <div className="project-desc">Utilized JavaScript/jQuery, OpenWeather API, REACT, CSS3, HMTL5, and Bootstrap</div>
                        <div className="project-link"><Link to="/Weather">Explore Project</Link></div>
                    </div>
                </div>
            </div>
        </div>

    </>
)

export default Works;
