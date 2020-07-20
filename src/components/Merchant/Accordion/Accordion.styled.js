import styled from 'styled-components';

const Arrow = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  margin: 0 6px;
  padding: 4px;
`;

export const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
`;

export const ArrowUp = styled(Arrow)`
  transform: rotate(-135deg);
`;

export const Label = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: 0;
  padding: 0;
  margin: 3px 0;  
  
  &:hover {
    text-decoration: underline;
  }
`;
