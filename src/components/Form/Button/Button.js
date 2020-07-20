import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ButtonComponent } from './Button.styled';

class Button extends Component {
  render() {
    const {
      onClick,
      title
    } = this.props;

    return (
      <ButtonComponent
        onClick={onClick}>
        {title}
      </ButtonComponent>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Button;
