import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Merchant from '../../components/Merchant/Merchant';

class AllMerchants extends Component {
  render() {
    const {loading, error, merchants, deleteMerchant} = this.props;

    return (
      <div>
        <Link to='/add'>Add new merchant</Link>
        <div>
          {!(error || loading) && merchants && merchants.map((merchant) =>
            <Merchant
              key={merchant.id}
              item={merchant}
              delete={deleteMerchant}
            />
          )}
          {loading && <p>Loading...</p>}
          {error && <p>Sorry, we could not load data</p>}
        </div>
      </div>
    );
  }
}

AllMerchants.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  merchants: PropTypes.array,
  deleteMerchant: PropTypes.func.isRequired
};

export default AllMerchants;
