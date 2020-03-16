import React, { Component } from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink:''
        };
    }
    handleNavigation = (e) => {
        this.setState({activeLink:e})
    }
    render() {
        return (
            <React.Fragment>
                <Navigation handleClick={this.handleNavigation.bind(this)}/>
                <Landing activeLink={this.state.activeLink} />
            </React.Fragment>
        )
    }
}

export default Welcome;