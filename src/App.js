import React from 'react';
import Calculator from './components/calculator';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1>Let&apos;s do some math!</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
