import styled from 'styled-components';
import colors from '../../../styles/colors';

export const CheckboxWrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${colors.main_background};
  stroke-width: 2px;
`;

export const Title = styled.span`
  margin-left: 9px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  border: 1px solid ${colors.main_background};
  border-radius: 3px;
  height: 21px;
  width: 21px;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`;
