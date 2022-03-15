import React from 'react';
import PropTypes from 'prop-types';
import Key from './key';

class KeyRow extends React.PureComponent {
  render() {
    const eleArray = [];
    const { keys } = this.props;
    for (let i = 0; i < keys.length; i += 1) {
      let key = {};
      if ('÷X-+='.includes(keys[i])) {
        key = <Key name={keys[i]} key={keys[i]} className="orange" />;
      } else key = <Key name={keys[i]} key={keys[i]} />;
      eleArray.push(key);
    }
    const element = (
      <div className="keyRow">
        {eleArray}
      </div>
    );
    return element;
  }
}

KeyRow.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default KeyRow;
