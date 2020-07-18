import {
    FETCH_MERCHANTS_BEGIN,
    FETCH_MERCHANTS_SUCCESS,
    FETCH_MERCHANTS_FAILURE
} from '../types/merchant';

const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MERCHANTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_MERCHANTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload.merchants
            }
        }
        case FETCH_MERCHANTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
};