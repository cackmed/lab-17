import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ clear }) => (
  <>
    <button onClick={clear}>Clear Inputs</button>
  </>
);

Button.propTypes = {
  clear: PropTypes.func.isRequired
};

export default Button;
