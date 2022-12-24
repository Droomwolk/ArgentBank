import React from 'react';
import PropTypes from 'prop-types';

function Button({
  className, color, back, padding, border, name, type, onClick
}) {
  return (
    <button
      className={`${className}`}
      style={{
        color: `${color}`, backgroundColor: `${back}`, padding: `${padding}`, border: `${border}`,
      }}
      type={`${type}`}
      onClick={onClick}
    > {name}
    </button>
  );
}

Button.propTypes = {};

export default Button;