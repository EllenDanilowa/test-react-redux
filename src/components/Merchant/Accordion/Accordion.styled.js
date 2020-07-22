import styled from 'styled-components';
import colors from '../../../styles/colors';

const Arrow = styled.i`
  border: solid ${colors.link};
  border-width: 0 2px 2px 0;
  display: inline-block;
  margin: 0 6px;
  padding: 4px;
  position: absolute;
  right: 0;
`;

export const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
  top: 5px;
`;

export const ArrowUp = styled(Arrow)`
  transform: rotate(-135deg);
  top: 9px;
`;

export const Label = styled.button`
  border: none;
  background: none;
  color: ${colors.link};
  cursor: pointer;
  outline: 0;
  padding: 4px 24px 4px 0;
  position: relative;
  margin: 3px 0;  
  
  &:hover {
    text-decoration: underline;
  }
`;
