import React from 'react';
import PropTypes from 'prop-types';

export default function Button({color, text, onClick}) {
  return (
    <button
      onClick={onClick}
      className="custom-btn btn"
      style={{backgroundColor: color}}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: 'black',
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
