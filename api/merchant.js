import _merchants from './data/merchants.json';
import _bids from './data/bids.json';
import {
  getRandomId,
  getRandomInt,
  convertImage
} from './merchant.utils';

const TIMEOUT = 250;

/**
 * Mocking client-server processing
 */
const _getAll = () => {
  return new Promise((resolve) => {
    const data = {};

    data.items = _merchants.map((item) => {
      item.bids = _bids.slice(0, getRandomInt(_bids.length));

      return item;
    });

    setTimeout(() => resolve({data}), TIMEOUT);
  });
};

const _update = (merchant) => {
  return new Promise((resolve) => {
    const newMerchant = {
      ...merchant,
      id: merchant.id || getRandomId(),
      bids: merchant.id ? merchant.bids : _bids.slice(0, getRandomInt(_bids.length)),
      avatar: null
    };
    const resolvePromise = () => setTimeout(() => resolve({data: newMerchant}), TIMEOUT);

    if (merchant.avatar && merchant.avatar.length) {
      convertImage(merchant.avatar[0]).then((image) => {
        newMerchant.avatarUrl = image;

        resolvePromise();
      }).catch((error) => {
        console.log(error);

        resolvePromise();
      });
    } else {
      resolvePromise();
    }
  });
};

const _delete = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({data: id}), TIMEOUT);
  });
};

export default {
  getAll: _getAll,
  create: _update,
  update: _update,
  delete: _delete
};
