import styled from 'styled-components';
import colors from '../../styles/colors';

export const Label = styled.label`
  display: block;
  color: ${colors.label};
  font-size: 17px;
  font-weight: 200;
  padding-bottom: 2px;
`;

export const FieldWrapper = styled.div`
  margin: 12px 0;
  position: relative;
  width: 500px;
`;

export const HiddenInput = styled.input`
  border: 0;
  height: 1px;
  margin: -1px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
