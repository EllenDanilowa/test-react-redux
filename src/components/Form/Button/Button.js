import React from 'react';
import PropTypes from 'prop-types';
import { ButtonComponent } from './Button.styled';

const Button = ({onClick, title}) => (
  <ButtonComponent
    onClick={onClick}>
    {title}
  </ButtonComponent>
);

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Button;
