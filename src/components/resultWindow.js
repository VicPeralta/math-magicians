/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const ResultWindow = (props) => (
  <div>
    <p className="results">{props.value}</p>
  </div>
);

ResultWindow.propTypes = {
  value: PropTypes.string.isRequired,
};
export default ResultWindow;
