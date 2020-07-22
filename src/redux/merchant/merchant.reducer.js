import {
  FETCH_MERCHANTS_BEGIN,
  FETCH_MERCHANTS_SUCCESS,
  FETCH_MERCHANTS_FAILURE,
  CREATE_NEW_MERCHANT_SUCCESS,
  UPDATE_MERCHANT_SUCCESS,
  DELETE_MERCHANT_SUCCESS
} from './merchant.constants';

const initialState = {
  items: [],
  loading: false,
  error: false
};

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  console.log('!!!');
  console.log(action);

  switch (action.type) {
    case FETCH_MERCHANTS_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case FETCH_MERCHANTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.payload.merchants
      };
    }
    case FETCH_MERCHANTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        items: []
      };
    }
    case CREATE_NEW_MERCHANT_SUCCESS: {
      const newItem = action.payload.merchant;

      return {
        ...state,
        items: (state.items || []).concat([newItem])
      };
    }
    case UPDATE_MERCHANT_SUCCESS: {
      const updatedItem = action.payload.merchant;
      console.log(updatedItem);
      console.log(state.items.map((item) => item.id === updatedItem.id ? updatedItem : item));
      return {
        ...state,
        items: state.items.map((item) => item.id === updatedItem.id ? updatedItem : item)
      };
    }
    case DELETE_MERCHANT_SUCCESS: {
      const id = action.payload.id;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== id)
      };
    }
    default: {
      return state;
    }
  }
};
