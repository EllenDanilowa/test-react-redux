import {connect} from 'react-redux';
import App from './App.component';
import {fetchMerchants} from './redux/merchant/merchant.actions';

const mapDispatchToProps = (dispatch) => ({
  fetchMerchants: () => {
    dispatch(fetchMerchants());
  }
});

export default connect(() => ({}), mapDispatchToProps)(App);
