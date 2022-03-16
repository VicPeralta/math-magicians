import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  let color;
  const { name } = props;
  if ('÷x-+='.includes(name)) color = 'orange';
  else color = 'black';
  const classList = `key ${color} ${name === '0' ? 'double' : ''}`;
  return (
    <button type="button" className={classList} data-id={name}>
      {name}
    </button>
  );
};

Key.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Key;
