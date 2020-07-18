import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bid from '../Bid/Bid';

class Merchant extends Component {
  render() {
    const { item } = this.props;

    return (
        <ul>
            <li>{ item.firstname }</li>
            <li>{ item.lastname }</li>
            <li>{ item.avatarUrl }</li>
            <li>{ item.string }</li>
            <li>{ item.email }</li>
            <li>{ item.hasPremium }</li>
            <li>{ item.bids.map(bid => (
                <Bid key={bid.id} item={bid} />
            )) }</li>     
            <li>edit</li>  
            <li>delete</li>    
        </ul>
    );
  }
}

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
    })
}

export default Merchant;