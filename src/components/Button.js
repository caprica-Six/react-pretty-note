import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

export default function CoreButton({buttonType, text, onClick}) {
  return (
    <Button onClick={onClick} className="custom-btn btn" type={buttonType}>
      {text}
    </Button>
  );
}

CoreButton.defaultProps = {
  color: 'black',
};

CoreButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
