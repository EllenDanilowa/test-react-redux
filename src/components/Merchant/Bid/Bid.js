import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Bid extends Component {
  render() {
    const {item} = this.props;

    return (
      <ul>
        <li>{item.carTitle}</li>
        <li>{item.amount}</li>
        <li>{item.created}</li>
      </ul>
    );
  }
}

Bid.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    carTitle: PropTypes.string.isRequired,
    amount: PropTypes.number.string,
    created: PropTypes.string.isRequired
  })
};

export default Bid;
