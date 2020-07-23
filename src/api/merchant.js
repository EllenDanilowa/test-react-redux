/**
 * Mocking client-server processing
 */
import _merchants from './data/merchants.json';
import _bids from './data/bids.json';
import {getRandomId, getRandomInt} from './merchant.utils';

const TIMEOUT = 1000;

const _getAll = () => {
  return new Promise((resolve) => {
    const data = _merchants.map((item) => {
      item.id = getRandomId();
      item.bids = _bids.slice(0, getRandomInt(_bids.length));

      return item;
    });

    setTimeout(() => resolve({data}), TIMEOUT);
  });
};

const _create = (merchant) => {
  return new Promise((resolve) => {
    const newMerchant = {
      ...merchant,
      id: getRandomId(),
      bids: _bids.slice(0, getRandomInt(_bids.length))
    };

    setTimeout(() => resolve({data: newMerchant}), TIMEOUT);
  });
};

const _update = (merchant) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({data: merchant}), TIMEOUT);
  });
};

const _delete = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({data: id}), TIMEOUT);
  });
};

export default {
  getAll: _getAll,
  create: _create,
  update: _update,
  delete: _delete
};
