import React from 'react';
import KeyRow from './keyRow';
import ResultWindow from './resultWindow';

const Calculator = () => (
  <div className="calculator">
    <ResultWindow />
    <KeyRow keys={['AC', '+/-', '%', '÷']} />
    <KeyRow keys={['7', '8', '9', 'X']} />
    <KeyRow keys={['4', '5', '6', '-']} />
    <KeyRow keys={['1', '2', '3', '+']} />
    <KeyRow keys={['0', '.', '=']} />
  </div>
);

export default Calculator;
