import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import {
  FETCH_MERCHANTS_BEGIN,
  FETCH_MERCHANTS_SUCCESS,
  FETCH_MERCHANTS_FAILURE,
  UPDATE_VISIBLE_MERCHANTS,
  CREATE_NEW_MERCHANT_SUCCESS,
  UPDATE_MERCHANT_SUCCESS,
  DELETE_MERCHANT_SUCCESS,
} from '../merchant.constants';
import * as actions from '../merchant.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('connected-react-router', () => ({push: () => ({type: 'PUSH'})}));

describe('Merchant Actions', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  describe('fetchMerchants', () => {
    let store;

    beforeEach(() => {
      store = mockStore({merchant: {}});
    });

    it('dispatches fetch begin and success action if fetch is successful', () => {
      const items = [0, 1, 2];
      fetchMock.mockResponseOnce(JSON.stringify({items}));

      const expectedActions = [
        {type: FETCH_MERCHANTS_BEGIN},
        {type: FETCH_MERCHANTS_SUCCESS, payload: {merchants: [...items]}}
      ];

      return store.dispatch(actions.fetchMerchants()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('dispatches fetch error action if fetch is failed', () => {
      fetchMock.mockRejectOnce('error');

      const expectedActions = [
        {type: FETCH_MERCHANTS_BEGIN},
        {type: FETCH_MERCHANTS_FAILURE, payload: {error: 'error'}}
      ];

      return store.dispatch(actions.fetchMerchants()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('createMerchant', () => {
    let store;

    beforeEach(() => {
      store = mockStore({merchant: {}});
    });

    it('dispatches fetch success and push action if create is successful', () => {
      const item = {name: 'test'};
      fetchMock.mockResponseOnce(JSON.stringify(item));

      const expectedActions = [
        {type: CREATE_NEW_MERCHANT_SUCCESS, payload: {merchant: item}},
        {type: 'PUSH'}
      ];

      return store.dispatch(actions.createMerchant({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('updateMerchant', () => {
    let store;

    beforeEach(() => {
      store = mockStore({merchant: {}});
    });

    it('dispatches fetch success and push action if update is successful', () => {
      const item = {name: 'test'};
      fetchMock.mockResponseOnce(JSON.stringify(item));

      const expectedActions = [
        {type: UPDATE_MERCHANT_SUCCESS, payload: {merchant: item}},
        {type: 'PUSH'}
      ];

      return store.dispatch(actions.updateMerchant({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('deleteMerchant', () => {
    let store;

    beforeEach(() => {
      store = mockStore({merchant: {}});
    });

    it('dispatches success action if merchant is deleted successfully', () => {
      const id = 'test-id';
      fetchMock.mockResponseOnce();
      const expectedActions = [
        {type: DELETE_MERCHANT_SUCCESS, payload: {id}},
      ];

      return store.dispatch(actions.deleteMerchant(id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('fetchMerchantsBegin', () => {
    it('creates an action', () => {
      const expectedAction = {
        type: FETCH_MERCHANTS_BEGIN,
      };

      expect(actions.fetchMerchantsBegin()).toEqual(expectedAction);
    });
  });

  describe('fetchMerchantsSuccess', () => {
    it('creates an action and sets merchants to payload', () => {
      const items = [0, 1, 2];
      const expectedAction = {
        type: FETCH_MERCHANTS_SUCCESS,
        payload: {
          merchants: [...items]
        }
      };

      expect(actions.fetchMerchantsSuccess({items})).toEqual(expectedAction);
    });
  });

  describe('fetchMerchantsFailure', () => {
    it('creates an action and sets error to payload', () => {
      const error = 'error message';
      const expectedAction = {
        type: FETCH_MERCHANTS_FAILURE,
        payload: {
          error
        }
      };

      expect(actions.fetchMerchantsFailure(error)).toEqual(expectedAction);
    });
  });

  describe('updateVisibleMerchants', () => {
    it('creates an action and sets ranges', () => {
      const from = 5;
      const to = 10;
      const expectedAction = {
        type: UPDATE_VISIBLE_MERCHANTS,
        payload: {
          from,
          to
        }
      };

      expect(actions.updateVisibleMerchants(from, to)).toEqual(expectedAction);
    });
  });

  describe('createNewMerchantSuccess', () => {
    it('creates an action and sets created merchant data to payload', () => {
      const merchant = 'merchant';
      const expectedAction = {
        type: CREATE_NEW_MERCHANT_SUCCESS,
        payload: {
          merchant
        }
      };

      expect(actions.createNewMerchantSuccess(merchant)).toEqual(expectedAction);
    });
  });

  describe('updateMerchantSuccess', () => {
    it('creates an action and sets updated merchant data to payload', () => {
      const merchant = 'merchant';
      const expectedAction = {
        type: UPDATE_MERCHANT_SUCCESS,
        payload: {
          merchant
        }
      };

      expect(actions.updateMerchantSuccess(merchant)).toEqual(expectedAction);
    });
  });

  describe('deleteMerchantSuccess', () => {
    it('creates an action and sets deleted merchant id to payload', () => {
      const id = '4';
      const expectedAction = {
        type: DELETE_MERCHANT_SUCCESS,
        payload: {
          id
        }
      };

      expect(actions.deleteMerchantSuccess(id)).toEqual(expectedAction);
    });
  });
});
