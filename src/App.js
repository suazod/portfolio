import React from 'react';
import Welcome from './containers/Welcome';
import './App.css';
//const mainBg = { backgroundImage: 'url(' + require('./styles/images/main.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize:'cover' };
function App() {
  return (
    <div className="App">
        <Welcome/>
    </div>
  );
}

export default App;
