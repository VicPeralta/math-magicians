import React, { useState } from 'react';
import KeyRow from './keyRow';
import ResultWindow from './resultWindow';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: 0,
    operation: null,
  });
  const [value, setValue] = useState('0');

  function processKey(key) {
    const newState = calculate(state, key);
    if (newState.operation && !newState.next && !newState.total) {
      setValue('0');
      return;
    }
    setState(newState);
    if (!newState.total && !newState.next && !newState.operation) {
      setValue('0');
      return;
    }
    if (newState.next !== null && newState !== undefined) {
      // Show the formula
      if (newState.operation !== null && newState.operation !== undefined) {
        const formula = `${newState.total} ${newState.operation} ${newState.next}`;
        setValue(formula);
      } else {
        // just show the key sequence
        setValue(newState.next);
      }
    } else if (newState.next === null && newState.operation !== null) setValue(newState.operation);
    else setValue((newState.total === null || newState.total === undefined) ? '0' : newState.total);
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
      <ResultWindow value={value} />
      <KeyRow keys={['AC', '+/-', '%', '÷']} />
      <KeyRow keys={['7', '8', '9', 'x']} />
      <KeyRow keys={['4', '5', '6', '-']} />
      <KeyRow keys={['1', '2', '3', '+']} />
      <KeyRow keys={['0', '.', '=']} />
    </div>
  );
};

export default Calculator;
