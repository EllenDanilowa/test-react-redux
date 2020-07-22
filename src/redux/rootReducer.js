import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import merchant from './merchant/merchant.reducer';

const root = (history) => combineReducers({
  router: connectRouter(history),
  merchant
});

export default root;
