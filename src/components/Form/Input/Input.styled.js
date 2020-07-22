import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../../styles/colors';

const inputColor = '#495057';
const inputBorderColor = '#ced4da';
const inputBorderFocusedColor = '#80bdff';
const inputShadowFocusedColor = 'rgba(0,123,255,.25)';
const inputErrorColor = '#e21219';
const inputBackgroundErrorColor = '#fdf3f3';

export const InputElement = styled.input`
  background-color: ${(props) => props.error ? inputBackgroundErrorColor : colors.main_color};
  border: 1px solid ${(props) => props.error ? inputErrorColor : inputBorderColor};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${inputColor};
  line-height: 1.5;
  outline: 0;
  padding: 12px 6px;
  width: 100%;
  
  &:focus {
    border-color: ${inputBorderFocusedColor};
    outline: 0;
    box-shadow: 0 0 3px 3px ${inputShadowFocusedColor};
  }
`;
InputElement.propTypes = {
  error: PropTypes.bool,
};

InputElement.defaultProps = {
  error: false
};

export const ErrorMessage = styled.p`
  color: ${inputErrorColor};
  font-size: 12px;
  margin: 4px 0;
`;
