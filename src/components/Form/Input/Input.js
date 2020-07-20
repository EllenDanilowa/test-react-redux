import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  InputWrapper,
  Label,
  InputElement,
  ErrorMessage
} from './Input.styled';

class Input extends Component {
  render() {
    const {
      name,
      onChange,
      placeholder,
      title,
      type,
      required,
      value,
      error
    } = this.props;

    return (
      <InputWrapper>
        <Label htmlFor={name}>{title}</Label>
        <InputElement
          id={name}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          error={Boolean(error)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
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
  ]).isRequired,
  error: PropTypes.string
};

export default Input;
