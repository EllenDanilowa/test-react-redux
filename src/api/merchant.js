/**
 * Mocking client-server processing
 */
import _merchants from './data/merchants.json';
import _bids from './data/bids.json';

const TIMEOUT = 1000;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getAll = () => {
  return new Promise((resolve) => {
    const data = _merchants.map((item) => {
      item.bids = _bids.slice(0, getRandomInt(_bids.length));

      return item;
    });

    setTimeout(() => {
      resolve({data});
    }, TIMEOUT);
  });
};

export default {
  getAll
};
