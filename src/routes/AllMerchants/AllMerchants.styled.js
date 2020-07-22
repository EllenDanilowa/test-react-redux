import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// TODO: create a common place for title
export const Title = styled.h3`
  color: ${colors.title};
  font-size: 32px;
  font-weight: 700;
`;

export const PageWrapper = styled.div`
  margin: 12px;
`;

export const Icon = styled.img`
  padding-right: 6px;
  vertical-align: text-top;
  width: 16px;
`;
