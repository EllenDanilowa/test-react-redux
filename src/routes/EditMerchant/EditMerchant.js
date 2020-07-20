import {connect} from 'react-redux';
import EditMerchant from './EditMerchant.component';
import {editMerchant} from '../../redux/merchant/merchant.actions';

const mapDispatchToProps = (dispatch) => ({
  editMerchant: (merchant) => {
    dispatch(editMerchant(merchant));
  }
});

export default connect(() => ({}), mapDispatchToProps)(EditMerchant);
