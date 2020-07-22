import React from 'react';
import PropTypes from 'prop-types';
import {
  MerchantWrapper,
  Avatar,
  Name,
  ContentWrapper,
  Icon,
  ActionIcon,
  ActionLink,
  PremiumIcon,
  ActionsWrapper,
  ContentItem,
  DeleteButton
} from './Merchant.styled';
import Bid from './Bid/Bid';
import Accordion from './Accordion/Accordion';
import defaultAvatar from './assets/default-avatar.png';
import mailIcon from './assets/mail.svg';
import phoneIcon from './assets/phone.svg';
import premiumIcon from './assets/premium-user.svg';
import editIcon from './assets/edit.svg';
import deleteIcon from './assets/delete.svg';

const Merchant = ({item, ...props}) => {
  const deleteMerchant = () => props.delete(item.id);

  return (
    <MerchantWrapper>
      {item.hasPremium && <PremiumIcon src={premiumIcon} alt="Premium user" title="Premium user"/>}
      <Avatar src={item.avatarUrl || defaultAvatar} alt="avatar"/>
      <ContentWrapper>
        <Name>{item.firstname} {item.lastname}</Name>

        <ContentItem>
          <Icon src={mailIcon}/>
          <span>{item.email}</span>
        </ContentItem>
        <ContentItem>
          <Icon src={phoneIcon}/>
          <span>{item.phone}</span>
        </ContentItem>

        {Boolean(item.bids.length) && (
          <Accordion title="See bids">
            <div>{item.bids.map((bid) => (
              <Bid key={bid.id} item={bid}/>
            ))}</div>
          </Accordion>
        )}

      </ContentWrapper>
      <ActionsWrapper>
        <ActionLink to={`/update/${item.id}`}>
          <ActionIcon src={editIcon}/>
        </ActionLink>
        <DeleteButton onClick={deleteMerchant}>
          <ActionIcon src={deleteIcon}/>
        </DeleteButton>
      </ActionsWrapper>
    </MerchantWrapper>
  );
};

Merchant.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    hasPremium: PropTypes.bool.isRequired,
    bids: PropTypes.array
  }),
  delete: PropTypes.func.isRequired
};

export default Merchant;
