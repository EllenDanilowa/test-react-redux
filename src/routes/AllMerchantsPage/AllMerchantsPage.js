import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Merchant from '../../components/Merchant/Merchant';
import { fetchMerchants } from '../../redux/actions/merchant';

class AllMerchantsPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMerchants()); // TODO think maybe there is more elegant way
  }

  render() {
    const { loading, error, merchants } = this.props;

    return (
        <div>
          <Link to='/add'>Add new merchant</Link>
          {!(error || loading) && merchants && merchants.map(merchant =>
            <Merchant
              key={merchant.id}
              item={merchant}
            />
          )}
          {loading && <p>Loading...</p>}
          {error && <p>Sorry, we couldn't load data</p>}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.merchant.loading,
  error: state.merchant.error,
  merchants: state.merchant.items,
})

export default connect(
  mapStateToProps
)(AllMerchantsPage)