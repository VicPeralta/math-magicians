import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.PureComponent {
  render() {
    let color;
    const { name } = this.props;
    if ('÷X-+='.includes(name)) color = 'orange';
    else color = 'black';
    const classList = `key ${color} ${name === '0' ? 'double' : ''}`;
    return (
      <button type="button" className={classList}>
        {name}
      </button>
    );
  }
}

Key.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Key;
