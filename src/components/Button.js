import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

export default function CoreButton({buttonType, text, onClick}) {
  return (
    <Button onClick={onClick} type={buttonType}>
      {text}
    </Button>
  );
}

CoreButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
