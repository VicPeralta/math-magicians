import React from 'react';
import KeyRow from './keyRow';
import ResultWindow from './resultWindow';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.refToResultWindow = React.createRef();
    this.object = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(e) {
    if (e.target.matches('button')) {
      this.processKey(e.target.dataset.id);
    }
  }

  handleKey(e) {
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
      // this.clickKey(textKey);
      this.processKey(textKey);
    }
  }

  processKey(key) {
    this.object = calculate(this.object, key);
    if (this.object.next != null) {
      this.refToResultWindow.current.setState({ value: this.object.next });
    } else {
      this.refToResultWindow.current.setState({ value: this.object.total ? this.object.total : '0' });
    }
  }

  render() {
    return (
      <div className="calculator" role="button" tabIndex="0" onClick={this.handleClick} onKeyDown={this.handleKey}>
        <ResultWindow ref={this.refToResultWindow} />
        <KeyRow keys={['AC', '+/-', '%', '÷']} />
        <KeyRow keys={['7', '8', '9', 'x']} />
        <KeyRow keys={['4', '5', '6', '-']} />
        <KeyRow keys={['1', '2', '3', '+']} />
        <KeyRow keys={['0', '.', '=']} />
      </div>
    );
  }
}

export default Calculator;
