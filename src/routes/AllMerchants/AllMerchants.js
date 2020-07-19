import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Merchant from '../../components/Merchant/Merchant';

class AllMerchants extends Component {
  render() {
    const {loading, error, merchants} = this.props;

    return (
      <div>
        <Link to='/add'>Add new merchant</Link>
        {!(error || loading) && merchants && merchants.map((merchant) =>
          <Merchant
            key={merchant.id}
            item={merchant}
          />
        )}
        {loading && <p>Loading...</p>}
        {error && <p>Sorry, we could not load data</p>}
      </div>
    );
  }
}

AllMerchants.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  merchants: PropTypes.array
};

const mapStateToProps = (state) => ({
  loading: state.merchant.loading,
  error: state.merchant.error,
  merchants: state.merchant.items,
});

export default connect(
  mapStateToProps
)(AllMerchants);
