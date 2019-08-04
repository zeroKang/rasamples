import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample'; 
import Sample2 from './Sample2';


function App() {

  const name = "Hello React App"
  const num = 10

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name} {num + 100}
        </p>
        <Sample></Sample>
        <Sample2></Sample2>
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
  );
}

export default App;
