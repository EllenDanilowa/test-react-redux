import {connect} from 'react-redux';
import EditMerchant from './EditMerchant.component';
import {updateMerchant} from '../../redux/merchant/merchant.actions';
import {getMerchantById} from '../../redux/merchant/merchant.selectors';

const mapStateToProps = (state, props) => {
  return { merchant: getMerchantById(state, props.match.params.id)};
};

const mapDispatchToProps = (dispatch) => ({
  updateMerchant: (merchant) => {
    dispatch(updateMerchant(merchant));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMerchant);
