import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Store from './containers/Store/Store';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main className="Content">
            <Store />
          </main> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;