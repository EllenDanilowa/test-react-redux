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

const URL = '/merchants';

const getFormData = (data) => {
  // Use it when send to a server
  // const formData = new FormData();
  //
  // for (const name in data) {
  //   formData.append(name, data[name]);
  // }
  //
  // return formData;

  return data;
};

export const fetchMerchants = () => {
  return (dispatch) => {
    dispatch(fetchMerchantsBegin());

    return fetch(URL, {
      method: 'GET'
    }).then(({body}) => JSON.parse(body))
      .then((body) => dispatch(fetchMerchantsSuccess(body)))
      .catch((error) => dispatch(fetchMerchantsFailure(error)));
  };
};

export const createMerchant = (item) => {
  return (dispatch) => {
    //dispatch(createMerchantsBegin());

    return fetch(`${URL}/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'multipart/form-data'
      },
      body: getFormData(item)
    }).then(({body}) => JSON.parse(body))
      .then((body) => {
        dispatch(createNewMerchantSuccess((body)));
        dispatch(push(''));
      });
    //.catch((error) => dispatch(createMerchantFailure(error)));
  };
};

export const updateMerchant = (item) => {
  return (dispatch) => {
    //dispatch(updateMerchantsBegin());

    return fetch(`${URL}/update`, {
      method: 'PUT',
      headers: {
        'Content-type': 'multipart/form-data'
      },
      body: getFormData(item)
    }).then(({body}) => JSON.parse(body))
      .then((body) => {
        dispatch(updateMerchantSuccess((body)));
        dispatch(push(''));
      });
    //.catch((error) => dispatch(updateMerchantsBegin(error)));
  };
};

export const deleteMerchant = (id) => {
  return (dispatch) => {
    //dispatch(deleteMerchantsBegin());

    return fetch(`${URL}/delete/${id}`, {
      method: 'DELETE'
    }).then(() => {
        dispatch(deleteMerchantSuccess((id)));
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
    merchants: data.items || []
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
