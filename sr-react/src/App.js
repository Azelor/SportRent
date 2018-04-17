import React, { Component } from 'react';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Store from './containers/Store/Store';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <main className="Content">
          <Store />
        </main>
        
      </div>
    );
  }
}

export default App;