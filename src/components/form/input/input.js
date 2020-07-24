import React from 'react';
import PropTypes from 'prop-types';
import {InputElement, ErrorMessage} from './input.styled';
import {FieldWrapper, Label} from '../form.styled';

export const DEFAULT_ERROR_MESSAGE = 'Oops are you sure? – this doesn’t look right';

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
        ref={refFunc}
        placeholder={placeholder}
        type={type}
        error={Boolean(error)}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FieldWrapper>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  refFunc: PropTypes.func.isRequired,
  error: PropTypes.object,
  errorMessage: PropTypes.string.isRequired
};

Input.defaultProps = {
  errorMessage: DEFAULT_ERROR_MESSAGE,
  placeholder: '',
  type: 'text'
};

export default Input;
