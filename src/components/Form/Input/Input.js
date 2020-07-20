import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      onChange,
      placeholder,
      title,
      type,
      required,
      value
    } = this.props;

    return (
      <div>
        <label htmlFor={name}>{title}</label>
        <input
          id={name}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired
};

export default Input;
