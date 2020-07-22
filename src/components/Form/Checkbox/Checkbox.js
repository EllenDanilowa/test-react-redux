import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Title
} from './Checkbox.styled';
import {FieldWrapper, Label} from '../Form.styled';

const Checkbox = ({refFunc, title, name, checked}) => (
  <FieldWrapper>
    <Label htmlFor={name}>
      <CheckboxWrapper>
        <HiddenCheckbox ref={refFunc} name={name} id={name}/>
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24" >
            <polyline points="20 6 9 17 4 12"/>
          </Icon>
        </StyledCheckbox>
        <Title>{title}</Title>
      </CheckboxWrapper>
    </Label>
  </FieldWrapper>
);

Checkbox.propTypes = {
  refFunc: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

export default Checkbox;
