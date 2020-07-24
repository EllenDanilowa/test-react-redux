import API from '../../../api/merchant';
import {push} from 'connected-react-router';
import {
  FETCH_MERCHANTS_BEGIN,
  FETCH_MERCHANTS_SUCCESS,
  FETCH_MERCHANTS_FAILURE,
  UPDATE_VISIBLE_MERCHANTS,
  CREATE_NEW_MERCHANT_SUCCESS,
  UPDATE_MERCHANT_SUCCESS,
  DELETE_MERCHANT_SUCCESS,
} from './merchant.constants';

export const fetchMerchants = () => {
  return (dispatch) => {
    dispatch(fetchMerchantsBegin());

    return API.getAll()
      .then((json) => dispatch(fetchMerchantsSuccess(json.data)))
      .catch((error) => dispatch(fetchMerchantsFailure(error)));
  };
};

export const createMerchant = (item) => {
  return (dispatch) => {
    //dispatch(createMerchantsBegin());

    return API.create(item)
      .then((json) => {
        dispatch(createNewMerchantSuccess((json.data)));
        dispatch(push(''));
      });
      //.catch((error) => dispatch(createMerchantFailure(error)));
  };
};

export const updateMerchant = (item) => {
  return (dispatch) => {
    //dispatch(updateMerchantsBegin());

    return API.update(item)
      .then((json) => {
        dispatch(updateMerchantSuccess((json.data)));
        dispatch(push(''));
      });
    //.catch((error) => dispatch(updateMerchantsBegin(error)));
  };
};

export const deleteMerchant = (item) => {
  return (dispatch) => {
    //dispatch(deleteMerchantsBegin());

    return API.delete(item)
      .then((json) => {
        dispatch(deleteMerchantSuccess((json.data)));
        dispatch(push(''));
      });
    //.catch((error) => dispatch(deleteMerchantsBegin(error)));
  };
};

export const fetchMerchantsBegin = () => ({
  type: FETCH_MERCHANTS_BEGIN
});

export const fetchMerchantsSuccess = (data) => ({
  type: FETCH_MERCHANTS_SUCCESS,
  payload: {
    merchants: data.items
  }
});

export const fetchMerchantsFailure = (error) => ({
  type: FETCH_MERCHANTS_FAILURE,
  payload: {error}
});

export const updateVisibleMerchants = (from, to) => ({
  type: UPDATE_VISIBLE_MERCHANTS,
  payload: {from, to}
});

export const createNewMerchantSuccess = (merchant) => ({
  type: CREATE_NEW_MERCHANT_SUCCESS,
  payload: {merchant}
});

export const updateMerchantSuccess = (merchant) => ({
  type: UPDATE_MERCHANT_SUCCESS,
  payload: {merchant}
});

export const deleteMerchantSuccess = (id) => ({
  type: DELETE_MERCHANT_SUCCESS,
  payload: {id}
});
