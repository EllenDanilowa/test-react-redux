import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  InputElement,
  ErrorMessage
} from './Input.styled';
import {FieldWrapper, Label} from '../Form.styled';

const DEFAULT_ERROR_MESSAGE = 'Oops are you sure? – this doesn’t look right';

class Input extends Component {
  render() {
    const {
      name,
      placeholder,
      title,
      type,
      error,
      refFunc,
      errorMessage
    } = this.props;

    return (
      <FieldWrapper>
        <Label htmlFor={name}>{title}</Label>
        <InputElement
          id={name}
          name={name}
          type={type || 'text'}
          placeholder={placeholder}
          ref={refFunc}
          error={Boolean(error)}
        />
        {error && <ErrorMessage>{errorMessage || DEFAULT_ERROR_MESSAGE}</ErrorMessage>}
      </FieldWrapper>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  refFunc: PropTypes.func.isRequired,
  error: PropTypes.object,
  errorMessage: PropTypes.string
};

export default Input;
