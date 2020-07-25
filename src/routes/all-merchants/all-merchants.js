import {connect} from 'react-redux';
import AllMerchants from './all-merchants.component';
import {deleteMerchant, fetchMerchants, updateVisibleMerchants} from '../../redux/merchant/merchant.actions';

const mapStateToProps = (state) => ({
  loading: state.merchant.loading,
  error: state.merchant.error,
  merchants: state.merchant.visibleItems,
  count: state.merchant.count,
  fetched: state.merchant.fetched
});

const mapDispatchToProps = (dispatch) => ({
  deleteMerchant: (id) => dispatch(deleteMerchant(id)),
  fetchMerchants: () => dispatch(fetchMerchants()),
  updateVisibleMerchants: (from, to) => dispatch(updateVisibleMerchants(from, to))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMerchants);
