import styled from 'styled-components';
import colors from '../../styles/colors';

const borderColor = '#cccccc';

export const MerchantWrapper = styled.div`
  border: 1px solid ${borderColor};
  border-radius: 4px;
  color: ${colors.title};
  display: flex;
  margin: 12px;
  padding: 12px;
  overflow: hidden;
  position: relative;
`;

export const Avatar = styled.img`
  align-self: flex-start;
  border-radius: 50%;
  flex: 0 0 200px;
  height: 200px;
  width: 200px;
`;

export const Name = styled.h4`
  font-size: 24px;
  font-weight: 500;
  margin: 24px 0;
`;

export const Icon = styled.img`
  padding-right: 4px;
  width: 15px;
`;

export const LargeIcon = styled.img`
  padding-right: 4px;
  width: 20px;
`;

export const ContentWrapper = styled.div`
  flex: 1 0 auto;
  padding: 16px;
`;

export const ContentItem = styled.div`
  font-size: 14px;
  display: flex;
  margin: 7px 0;
`;

export const PremiumIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 30px;
`;

export const ActionsWrapper = styled.div`
  align-self: flex-end;
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: 0;
  padding: 0;
`;
