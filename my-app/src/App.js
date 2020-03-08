import React, { Component } from 'react';
import Ovi from './Ovi'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Glad to hear from you</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Ovi />
        </p>
      </div>
    );
  }
}

export default App;
