import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample'; 
import Sample2 from './Sample2';
import SampleButton from './SampleButton';
import Box from './Box';

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
        <Box title="Box Sample">

          <Sample></Sample>
          <Sample2></Sample2>
          <SampleButton></SampleButton>
          
        </Box>
        
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
