import API from '../../api/merchant';
import { 
    FETCH_MERCHANTS_BEGIN, 
    FETCH_MERCHANTS_SUCCESS, 
    FETCH_MERCHANTS_FAILURE
} from '../types/merchant';

export const fetchMerchants = () => {
    return dispatch => {
      dispatch(fetchMerchantsBegin());
      return API.getAll()
        .then(json => {
          dispatch(fetchMerchantsSuccess(json.data));
          return json.data;
        })
        .catch(error => dispatch(fetchMerchantsFailure(error)));
    };
  };

export const fetchMerchantsBegin = () => ({
  type: FETCH_MERCHANTS_BEGIN
});

export const fetchMerchantsSuccess = merchants => ({
  type: FETCH_MERCHANTS_SUCCESS,
  payload: { merchants }
});

export const fetchMerchantsFailure = error => ({
  type: FETCH_MERCHANTS_FAILURE,
  payload: { error }
});