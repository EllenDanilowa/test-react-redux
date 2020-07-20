import {connect} from 'react-redux';
import AllMerchants from './AllMerchants.component';
import {deleteMerchant} from '../../redux/merchant/merchant.actions';

const mapStateToProps = (state) => ({
  loading: state.merchant.loading,
  error: state.merchant.error,
  merchants: state.merchant.items,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMerchant: (id) => {
    dispatch(deleteMerchant(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMerchants);
