import styled from 'styled-components';
import colors from '../../../styles/colors';
import {Label as FormLabel} from '../form.styled';

export const Label = styled(FormLabel)`
  cursor: pointer;
  color: ${colors.link}
`;

export const Icon = styled.img`
  display: inline-block;  
  margin-right: 5px;
  width: 18px;

`;
