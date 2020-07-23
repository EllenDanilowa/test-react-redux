import {connect} from 'react-redux';
import NewMerchant from './new-merchant.component';
import {createMerchant} from '../../redux/merchant/merchant.actions';

const mapDispatchToProps = (dispatch) => ({
  createMerchant: (merchant) => {
    dispatch(createMerchant(merchant));
  }
});

export default connect(() => ({}), mapDispatchToProps)(NewMerchant);
