import {
  FETCH_MERCHANTS_BEGIN,
  FETCH_MERCHANTS_SUCCESS,
  FETCH_MERCHANTS_FAILURE,
  UPDATE_VISIBLE_MERCHANTS,
  CREATE_NEW_MERCHANT_SUCCESS,
  UPDATE_MERCHANT_SUCCESS,
  DELETE_MERCHANT_SUCCESS
} from './merchant.constants';

const initialState = {
  items: [],
  visibleItems: [],
  fetched: false, // Temp solution: for not refreshing state on create/update
  count: 0,
  loading: false,
  error: false
};

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case FETCH_MERCHANTS_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case FETCH_MERCHANTS_SUCCESS: {
      const newState = {
        ...state,
        fetched: true,
        loading: false
      };

      if (!state.fetched) {
        newState.items = action.payload.merchants;
        newState.count = action.payload.merchants.length;
      }

      return newState;
    }
    case FETCH_MERCHANTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        items: []
      };
    }
    case UPDATE_VISIBLE_MERCHANTS: {
      const {from, to} = action.payload;

      return {
        ...state,
        visibleItems: state.items.slice(from, to)
      };
    }
    case CREATE_NEW_MERCHANT_SUCCESS: {
      const newItem = action.payload.merchant;
      const items = (state.items || []).concat([newItem]);

      return {
        ...state,
        items,
        count: items.length
      };
    }
    case UPDATE_MERCHANT_SUCCESS: {
      const updatedItem = action.payload.merchant;

      return {
        ...state,
        items: state.items.map((item) => item.id === updatedItem.id ? updatedItem : item)
      };
    }
    case DELETE_MERCHANT_SUCCESS: {
      const id = action.payload.id;
      const items = state.items.filter((item) => item.id !== id);

      return {
        ...state,
        items,
        count: items.length
      };
    }
    default: {
      return state;
    }
  }
};
