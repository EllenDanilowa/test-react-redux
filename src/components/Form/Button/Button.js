import React from 'react';
import PropTypes from 'prop-types';
import { ButtonComponent } from './Button.styled';

const Button = ({onClick, title, type}) => (
  <ButtonComponent
    onClick={onClick}
    value={title}
    type={type}>
  </ButtonComponent>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button'
};


export default Button;
