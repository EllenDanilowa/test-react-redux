import reducer from '../merchant.reducer';
import {
  CREATE_NEW_MERCHANT_SUCCESS,
  DELETE_MERCHANT_SUCCESS,
  FETCH_MERCHANTS_BEGIN,
  FETCH_MERCHANTS_FAILURE,
  FETCH_MERCHANTS_SUCCESS, UPDATE_MERCHANT_SUCCESS,
  UPDATE_VISIBLE_MERCHANTS
} from '../merchant.constants';

describe('Merchant reducer', () => {
  it('initializes a state if not defined', () => {
    const expectedState = {
      items: [],
      visibleItems: [],
      fetched: false,
      count: 0,
      loading: false,
      error: false
    };

    expect(reducer()).toEqual(expectedState);
  });

  describe('FETCH_MERCHANTS_BEGIN', () => {
    it('sets loading to true and error state to false', () => {
      const state = {
        loading: false,
        error: true
      };
      const expectedState = {
        loading: true,
        error: false
      };

      expect(reducer(state, {type: FETCH_MERCHANTS_BEGIN})).toEqual(expectedState);
    });
  });

  describe('FETCH_MERCHANTS_SUCCESS', () => {
    it('sets loading to false and updates items', () => {
      const state = {
        loading: true,
        items: [{id: 0}, {id: 1}, {id: 2}],
        count: 3,
        fetched: false
      };
      const expectedState = {
        items: [{id: 3, bids: []}, {id: 4, bids: []}],
        count: 2,
        loading: false,
        fetched: true
      };
      const action = {
        type: FETCH_MERCHANTS_SUCCESS,
        payload: {
          merchants: [{id: 3}, {id: 4}]
        }
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });

    it('sorts bids by date created', () => {
      const state = {
        loading: true,
        items: [0, 1, 2],
        count: 3,
        fetched: false
      };
      const expectedState = {
        items: [{
          bids: [
            {
              id: 2,
              created: 1595202600000
            },
            {
              id: 1,
              created: 1585202600000
            }
          ]
        }],
        count: 1,
        loading: false,
        fetched: true
      };
      const action = {
        type: FETCH_MERCHANTS_SUCCESS,
        payload: {
          merchants: [{
            bids: [
              {
                id: 1,
                created: 1585202600000
              },
              {
                id: 2,
                created: 1595202600000
              }
            ]
          }]
        }
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });
  });

  describe('FETCH_MERCHANTS_FAILURE', () => {
    it('sets loading to false and error to true', () => {
      const state = {
        loading: true,
        error: false
      };
      const expectedState = {
        loading: false,
        error: true
      };

      expect(reducer(state, {type: FETCH_MERCHANTS_FAILURE})).toEqual(expectedState);
    });
  });

  describe('UPDATE_VISIBLE_MERCHANTS', () => {
    it('sets visible merchants according to settings from a payload', () => {
      const state = {
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      };
      const expectedState = {
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        visibleItems: [5, 6, 7, 8],
      };
      const action = {
        type: UPDATE_VISIBLE_MERCHANTS,
        payload: {
          from: 5,
          to: 9
        }
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });
  });

  describe('CREATE_NEW_MERCHANT_SUCCESS', () => {
    it('adds new item to existing items in state', () => {
      const state = {
        items: [{id: 0}, {id: 1}],
        count: 2
      };
      const expectedState = {
        items: [{id: 0}, {id: 1}, {id: 2, bids: []}],
        count: 3
      };
      const action = {
        type: CREATE_NEW_MERCHANT_SUCCESS,
        payload: {
          merchant: {id: 2}
        }
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });

    it('adds new item with sorted by date bids', () => {
      const state = {
        items: [{id: 0}],
        count: 1
      };
      const expectedState = {
        items: [
          {id: 0},
          {
            id: 2,
            bids: [
              {
                id: 2,
                created: 1595202600000
              },
              {
                id: 1,
                created: 1585202600000
              }
            ]
          }],
        count: 2
      };
      const action = {
        type: CREATE_NEW_MERCHANT_SUCCESS,
        payload: {
          merchant: {
            id: 2,
            bids: [
              {
                id: 1,
                created: 1585202600000
              },
              {
                id: 2,
                created: 1595202600000
              }
            ]
          }
        }
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });
  });

  describe('UPDATE_MERCHANT_SUCCESS', () => {
    it('updates item in state', () => {
      const state = {
        items: [{id: 1, a: '1'}, {id: 2, a: '2'}]
      };
      const expectedState = {
        items: [{id: 1, a: '1'}, {id: 2, a: 'updated 2'}],
      };
      const action = {
        type: UPDATE_MERCHANT_SUCCESS,
        payload: {
          merchant: {id: 2, a: 'updated 2'}
        }
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });
  });

  describe('DELETE_MERCHANT_SUCCESS', () => {
    it('removes item from state', () => {
      const state = {
        items: [{id: 1, a: '1'}, {id: 2, a: '2'}],
        count: 2
      };
      const expectedState = {
        items: [{id: 1, a: '1'}],
        count: 1
      };
      const action = {
        type: DELETE_MERCHANT_SUCCESS,
        payload: {
          id: 2
        }
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });
  });
});
