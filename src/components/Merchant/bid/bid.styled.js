import styled from 'styled-components';
import colors from '../../../styles/colors';

export const BidWrapper = styled.div`
    background: #1b469105;
    box-shadow: 0 1px 2px 0 rgba(103,65,134,.2);
    border-radius: 5px;
    color: ${colors.text};
    font-size: 13px;
    margin: 10px;
    max-width: 500px;
    padding: 12px 12px 7px;
`;

export const Title = styled.h5`
   color: ${colors.title};
   font-size: 16px;
   font-weight: 500;
   margin: 0 0 12px;
`;

export const BidContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BidContentItem = styled.p`
  flex: 1 0 150px;
  margin: 5px 0;
`;
