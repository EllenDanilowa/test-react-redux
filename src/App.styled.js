import styled, {keyframes} from 'styled-components';
import colors from './styles/colors';

const logo_appearance = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Logo = styled.img`
  animation: ${logo_appearance} 1.6s ease-in;
  height: 35px;
  background: ${colors.main_color};
  padding: 15px 0;
  border-radius: 3px;
`;

export const Header = styled.header`
  background-color: ${colors.main_background};
  color: ${colors.main_color};
  display: flex;
  justify-content: center;
  height: 65px;
  padding: 20px;
`;
