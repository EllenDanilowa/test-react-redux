import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../styles/colors';


const borderColor = '#cccccc';

export const MerchantWrapper = styled.div`
  border: 1px solid ${borderColor};
  border-radius: 4px;
  color: ${colors.title};
  display: flex;
  margin: 12px 0;
  padding: 12px;
  overflow: hidden;
  position: relative;
`;

const avatarSize = '130px';
export const Avatar = styled.img`
  align-self: flex-start;
  flex: 0 0 ${avatarSize};
  height: auto;
  width: ${avatarSize};
`;

export const Name = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin: 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Icon = styled.img`
  padding-right: 4px;
  width: 15px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
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
  display: flex;
  flex: 0 0 60px;
  justify-content: flex-end;
`;

export const ActionIcon = styled.img`
  width: 20px;
`;

export const ActionLink = styled(Link)`
  display: block;
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: 0;
  padding: 0;
  margin-left: 8px;
`;
