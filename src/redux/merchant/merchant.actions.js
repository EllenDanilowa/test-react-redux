import API from '../../api/merchant';
import {
  FETCH_MERCHANTS_BEGIN,
  FETCH_MERCHANTS_SUCCESS,
  FETCH_MERCHANTS_FAILURE,
  ADD_NEW_MERCHANT,
  EDIT_MERCHANT,
  DELETE_MERCHANT,
} from './merchant.constants';

export const fetchMerchants = () => {
  return (dispatch) => {
    dispatch(fetchMerchantsBegin());

    return API.getAll()
      .then((json) => dispatch(fetchMerchantsSuccess(json.data)))
      .catch((error) => dispatch(fetchMerchantsFailure(error)));
  };
};

export const fetchMerchantsBegin = () => ({
  type: FETCH_MERCHANTS_BEGIN
});

export const fetchMerchantsSuccess = (merchants) => ({
  type: FETCH_MERCHANTS_SUCCESS,
  payload: {merchants}
});

export const fetchMerchantsFailure = (error) => ({
  type: FETCH_MERCHANTS_FAILURE,
  payload: {error}
});

export const addNewMerchant = (merchant) => ({
  type: ADD_NEW_MERCHANT,
  payload: {merchant}
});

export const editMerchant = (merchant) => ({
  type: EDIT_MERCHANT,
  payload: {merchant}
});

export const deleteMerchant = (id) => ({
  type: DELETE_MERCHANT,
  payload: {id}
});
