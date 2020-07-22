import styled from 'styled-components';
import colors from '../../styles/colors';

export const Label = styled.label`
  display: block;
  color: ${colors.label};
  font-size: 15px;
  font-weight: 200;
  padding-bottom: 2px;
`;

export const FieldWrapper = styled.div`
  margin: 12px 0;
  width: 500px;
`;
