import React, { Component } from 'react';
import VideoSample from '../../src/styles/videos/circles.mp4';
import Logos from '../../src/styles/images/logosFiles.png';
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        const video = document.querySelector("video");
        // Slow it to 50% speed
        video.playbackRate = 0.8;
    }

    render() {
        const slideOut = this.props.activeLink === 'active-about' || this.props.activeLink === 'active-work' ? ' fade-out' : 'fade-in';
        const slideDown = this.props.activeLink === 'active-about' ? ' slide-bottom' : this.props.activeLink === 'active-work' ? ' fade-out' : '';
        const aboutShow = this.props.activeLink === 'active-about' ? 'about-me fade-in' : 'about-me hide';
        const showNilma = this.props.activeLink === 'active-about' || this.props.activeLink === 'active-work' ? ' fade-in-bottom show' : ' hide';
        const mobileActive = this.props.activeLink === 'active-about' ? ' active-about-mobile' : ' ';
        const workShow = this.props.activeLink === 'active-work' ? ' fade-in work-title' : 'about-me hide';
        const showLogos = this.props.activeLink === 'active-work' ? ' show' : ' hide';
        return (
            <div className="landing-page">
                <header>
                    <div className={slideOut}>
                        <div className="overlay"></div>
                        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                            <source src={VideoSample} type='video/mp4' />
                        </video>
                    </div>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">

                            <div className="row no-gutters">
                                <div className="col-12 about-text">
                                    <div className={aboutShow}>
                                        <h1>Hi, I'm Danny Suazo</h1>

                                        <p>As a designer and front-end developer, I have experience in web design, web development, creating brands and designing print materials for over four years. I find inspiration in nature, architecture, music, and other creative designers/developers. I'm a fan of <strong>structure</strong> and <strong>simplicity</strong> in both design and code; <strong>organization</strong> and <strong>consistency</strong> always shows in my work. While taking courses, I also learn from tutorials and resource sites to expand my knowledge. My nights consist of designing & coding for hours with coffee and some awesome music.</p>

                                        <h3>Credentials</h3>

                                        <p><span className="cert-title">Certificate Houston Coding Bootcamp - The University of Texas at Austin</span>
                                        An intensive 24-week long boot camp dedicated to designing and building web applications.</p>

                                        <p><span className="cert-title">B.S. Multimedia Design & Development - DeVry University</span>
                                        Focused on Web Design, Graphic Design, Advertising & Marketing</p>
                                    </div>
                                    <div className={workShow}>
                                        <p>Few projects I'm currently working on..</p>
                                        <div className="row no-gutters">
                                            <div className="col-12 work-projects">
                                                <span className="link--bravoo">Bravoo
                                                    <span>
                                                        <a href="https://bravoo.herokuapp.com/" target="_blank" rel="noopener noreferrer">See App</a> | <a href="https://github.com/suazod/bravoo" target="_blank" rel="noopener noreferrer">See Code</a>
                                                    </span>
                                                </span>

                                                <span className="link--bravoo">Audio Buzz
                                                    <span>
                                                        <a href="https://gboyce.github.io/audiobuzz/" target="_blank" rel="noopener noreferrer">See App</a> | <a href="https://github.com/gboyce/audiobuzz" target="_blank" rel="noopener noreferrer">See Code</a>
                                                    </span>
                                                </span>

                                                <span className="link--bravoo">Petential
                                                    <span>
                                                        <a href="https://stormy-stream-36757.herokuapp.com/" target="_blank" rel="noopener noreferrer">See App</a> | <a href="https://github.com/suazod/petential" target="_blank" rel="noopener noreferrer">See Code</a>
                                                    </span>
                                                </span>
                                                {/* <a href="https://gboyce.github.io/audiobuzz/" target="_blank">Audio Buzz</a>
                                                <a href="https://stormy-stream-36757.herokuapp.com/" target="_blank">Petential</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"row no-gutters barcode" + mobileActive}>
                                <div className="col-12">
                                    <div className="w-100 text-white">
                                        <h1 className={"display-3" + slideDown}><span className="main-title">Digital Designer + Developer</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <div className='icon-scroll'><span className="scroll-text">Scroll</span></div> */}
                <div className={"active-nilima" + showNilma}>
                    {this.props.activeLink === 'active-about' ?
                        <span>Profile</span> :
                        this.props.activeLink === 'active-work' ?
                            <span>work</span> :
                            null
                    }

                </div>
                {this.props.activeLink === 'active-work' ? null :
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/danny-suazo-18173b59" target="_blank">Linked<span>In</span></a>
                    </div>
                }
                <div className="volume-one">
                    <span>V<span className='dot'>.</span>1</span>
                </div>
                <img src={Logos} className={"logos App-logo" + showLogos} />
            </div >
        )
    }
}

export default Welcome;