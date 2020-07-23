import styled from 'styled-components';
import colors from './../../../styles/colors';

export const ButtonComponent = styled.input`
  background: ${colors.primary_button};
  color: ${colors.main_color};
  border: none;
  border-radius: 4px;
  padding: 14px 24px;
  
  &:hover {
    background: ${colors.main_background}
  }
`;
