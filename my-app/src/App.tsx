import React from 'react';
import logo from '../src/common/images/logo.svg';
import '../src/common/style/App.css';

import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        你好Fragment
      </div>
    </Fragment>
  );
}

export default App;
