import {connect} from 'react-redux';
import AllMerchants from './all-merchants.component';
import {deleteMerchant, fetchMerchants} from '../../redux/merchant/merchant.actions';

const mapStateToProps = (state) => ({
  loading: state.merchant.loading,
  error: state.merchant.error,
  merchants: state.merchant.items,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMerchant: (id) => dispatch(deleteMerchant(id)),
  fetchMerchants: () => dispatch(fetchMerchants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMerchants);
