import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Bid from '../Bid/Bid';
import {connect} from 'react-redux';
import {deleteMerchant} from '../../redux/actions/merchant';

class Merchant extends Component {
  constructor(props) {
    super(props);

    this.deleteMerchant = this.deleteMerchant.bind(this);
  }

  deleteMerchant() {
    this.props.delete(this.props.item.id);
  }

  render() {
    const {item} = this.props;

    return (
      <ul>
        <li>{item.firstname}</li>
        <li>{item.lastname}</li>
        <li>{item.avatarUrl}</li>
        <li>{item.string}</li>
        <li>{item.email}</li>
        <li>{item.hasPremium}</li>
        <li>{item.bids.map((bid) => (
          <Bid key={bid.id} item={bid}/>
        ))}</li>
        <Link to={`/edit/${item.id}`}>Edit</Link>
        <button onClick={this.deleteMerchant}>Delete</button>
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
  }),
  delete: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  delete: (id) => {
    dispatch(deleteMerchant(id));
  }
});

export default connect(() => ({}), mapDispatchToProps)(Merchant);
