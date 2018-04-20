import React, { Component } from 'react';

import Store from './containers/Store/Store';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="Content">
          <Store />
        </main>
        
      </div>
    );
  }
}

export default App;