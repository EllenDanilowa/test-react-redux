import {connect} from 'react-redux';
import NewMerchant from './NewMerchant.component';
import {addNewMerchant} from '../../redux/merchant/merchant.actions';



const mapDispatchToProps = (dispatch) => ({
  createMerchant: (merchant) => {
    dispatch(addNewMerchant(merchant));
  }
});

export default connect(() => ({}), mapDispatchToProps)(NewMerchant);
