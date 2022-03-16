import React, { useEffect, useRef, useState } from 'react';
import KeyRow from './keyRow';
import ResultWindow from './resultWindow';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const refToResultWindow = useRef();

  useEffect(() => {
    if (state.next != null) {
      refToResultWindow.current.setState({ value: state.next });
    } else {
      refToResultWindow.current.setState({ value: state.total ? state.total : '0' });
    }
  });

  function processKey(key) {
    const newState = calculate(state, key);
    setState(newState);
  }

  function handleClick(e) {
    if (e.target.matches('button')) {
      processKey(e.target.dataset.id);
    }
  }

  function handleKey(e) {
    let textKey;
    e.preventDefault();
    if (e.code.substring(0, 5) === 'Digit') {
      textKey = e.code.substring(5);
    } else if (e.code.substring(0, 6) === 'Numpad') {
      if (e.code === 'NumpadAdd') textKey = '+';
      else if (e.code === 'NumpadMultiply') textKey = 'x';
      else if (e.code === 'NumpadSubtract') textKey = '-';
      else if (e.code === 'NumpadDivide') textKey = '/';
      else if (e.code === 'NumpadEnter') textKey = '=';
      else if (e.code === 'NumpadDecimal') textKey = '.';
      else textKey = e.code.substring(6);
    } else if (e.code === 'KeyC' || e.code === 'Escape') {
      textKey = 'AC';
    }
    if (textKey) {
      processKey(textKey);
    }
  }

  return (
    <div className="calculator" role="button" tabIndex="0" onClick={handleClick} onKeyDown={handleKey}>
      <ResultWindow ref={refToResultWindow} />
      <KeyRow keys={['AC', '+/-', '%', '÷']} />
      <KeyRow keys={['7', '8', '9', 'x']} />
      <KeyRow keys={['4', '5', '6', '-']} />
      <KeyRow keys={['1', '2', '3', '+']} />
      <KeyRow keys={['0', '.', '=']} />
    </div>
  );
};

export default Calculator;
