import React, { Component } from 'react';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Store from './containers/Store/Store';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Store />
      </div>
    );
  }
}

export default App;