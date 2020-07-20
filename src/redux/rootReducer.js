import {combineReducers} from 'redux';
import merchant from './merchant/merchant.reducer';

const root = combineReducers({
  merchant
});

export default root;
