import React from 'react';
import Calculator from '../components/calculator';
import './calculator.css';

class CalculatorPage extends React.PureComponent {
  render() {
    return (
      <div className="calculator-page">
        <Calculator />
        <h1>Let&apos;s do some math!</h1>
      </div>
    );
  }
}

export default CalculatorPage;
