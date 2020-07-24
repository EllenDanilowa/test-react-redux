import {getMerchantById} from '../merchant.selectors';

describe('Merchant Selectors', () => {
  describe('getMerchantById', () => {
    let state;

    beforeEach(() => {
      state = {
        merchant: {
          items: [
            {
              id: '1',
              name: 'Merchant 1'
            },
            {
              id: '2',
              name: 'Merchant 2'
            }
          ]
        }
      };
    });

    it('returns merchant by id', () => {
      const expectedMerchant = {
        id: '2',
        name: 'Merchant 2'
      };

      expect(getMerchantById(state, '2')).toEqual(expectedMerchant);
    });
  });
});
