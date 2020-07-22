import {connect} from 'react-redux';
import EditMerchant from './EditMerchant.component';
import {editMerchant} from '../../redux/merchant/merchant.actions';
import {getMerchantById} from '../../redux/merchant/merchant.selectors';

const mapStateToProps = (state, props) => {
  return { merchant: getMerchantById(state, props.match.params.id)};
};

const mapDispatchToProps = (dispatch) => ({
  editMerchant: (merchant) => {
    dispatch(editMerchant(merchant));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMerchant);
