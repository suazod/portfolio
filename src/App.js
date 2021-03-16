import React from 'react';
import Welcome from './pages/Welcome';
import AudioBuzz from './pages/AudioBuzz';
import Works from './pages/Works';
import About from './pages/About';
import Petential from './pages/Petential';
import Bravoo from './pages/Bravoo';
import Halloween from './pages/Halloween';
import Karaoke from './pages/Karaoke';
import Lsc from './pages/Lsc';
import Hiretech from './pages/Hiretech';
import Weather from './pages/Weather';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
//const mainBg = { backgroundImage: 'url(' + require('./styles/images/main.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize:'cover' };
function App() {
  return (
    <Router>
    <div className="App">
        <Route path="/" component={Welcome} exact/>
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Works} />
        <Route path="/AudioBuzz" component={AudioBuzz} />
        <Route path="/Petential" component={Petential} />
        <Route path="/Bravoo" component={Bravoo} />
        <Route path="/Halloween" component={Halloween} />
        <Route path="/Karaoke" component={Karaoke} />
        <Route path="/Lsc" component={Lsc} />
        <Route path="/Hiretech" component={Hiretech} />
        <Route path="/Weather" component={Weather} />
    </div>
    </Router>
  );
}

export default App;
