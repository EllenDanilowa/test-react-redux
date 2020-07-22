import {connect} from 'react-redux';
import NewMerchant from './NewMerchant.component';
import {addMerchant} from '../../redux/merchant/merchant.actions';

const mapDispatchToProps = (dispatch) => ({
  createMerchant: (merchant) => {
    dispatch(addMerchant(merchant));
  }
});

export default connect(() => ({}), mapDispatchToProps)(NewMerchant);
