import React from 'react';
import PropTypes from 'prop-types';
import {
  BidWrapper,
  Title,
  BidContent,
  BidContentItem
} from './bid.styled';

const Bid = ({item}) => {
  const {
    carTitle,
    amount,
    created
  } = item;
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(created);

  return (
    <BidWrapper>
      <Title>{carTitle}</Title>
      <BidContent>
        <BidContentItem>
          <b>Amount: </b>
          {amount}
        </BidContentItem>
        <BidContentItem>
          <b>Created: </b>
          {formattedDate}
        </BidContentItem>
      </BidContent>
    </BidWrapper>
  );
};

Bid.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    carTitle: PropTypes.string.isRequired,
    amount: PropTypes.number.string,
    created: PropTypes.number.isRequired
  }).isRequired
};

export default Bid;
