import React from 'react';
import PropTypes from 'prop-types';
import {
  InputElement,
  ErrorMessage
} from './input.styled';
import {FieldWrapper, Label} from '../form.styled';

const DEFAULT_ERROR_MESSAGE = 'Oops are you sure? – this doesn’t look right';

const Input = (props) => {
  const {
    name,
    placeholder,
    title,
    type,
    error,
    refFunc,
    errorMessage
  } = props;

  return (
    <FieldWrapper>
      <Label htmlFor={name}>{title}</Label>
      <InputElement
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={refFunc}
        error={Boolean(error)}
      />
      {error && <ErrorMessage>{errorMessage || DEFAULT_ERROR_MESSAGE}</ErrorMessage>}
    </FieldWrapper>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  refFunc: PropTypes.func.isRequired,
  error: PropTypes.object,
  errorMessage: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
