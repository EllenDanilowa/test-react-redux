/**
 * Mocking client-server processing
 */
import _merchants from './data/merchants.json';
import _bids from './data/bids.json';

const TIMEOUT = 1000;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomId = () => Math.random().toString(36).substr(2, 9);

const getAll = () => {
  return new Promise((resolve) => {
    const data = _merchants.map((item) => {
      item.id = getRandomId();
      item.bids = _bids.slice(0, getRandomInt(_bids.length));

      return item;
    });

    setTimeout(() => {
      resolve({data});
    }, TIMEOUT);
  });
};

const create = (merchant) => {
  merchant.id = getRandomId();

  return new Promise((resolve) => {
    setTimeout(() => resolve({data: merchant}), TIMEOUT);
  });
};

const update = (merchant) => {
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
  getAll,
  create,
  update,
  delete: _delete
};
