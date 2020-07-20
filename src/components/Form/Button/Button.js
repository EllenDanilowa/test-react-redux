import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      onClick,
      title,
      type
    } = this.props;

    return (
      <button
        onClick={onClick}
        type={type || 'button'}>
        {title}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
