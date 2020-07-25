import _merchants from './data/merchants.json';
import _bids from './data/bids.json';
import {
  getRandomId,
  getRandomInt,
  convertImage
} from './merchant.utils';

const _getAll = () => {
  const data = {};

  data.items = _merchants.map((item) => {
    item.bids = _bids.slice(0, getRandomInt(_bids.length));

    return item;
  });

  return data;
};

const _update = (merchant) => {
  return new Promise((resolve) => {
    const newMerchant = {
      ...merchant,
      id: merchant.id || getRandomId(),
      bids: merchant.id ? merchant.bids : _bids.slice(0, getRandomInt(_bids.length)),
      avatar: null
    };
    const resolvePromise = () => resolve(newMerchant);

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

const _delete = () => {
  return '';
};

export default {
  getAll: _getAll,
  create: _update,
  update: _update,
  delete: _delete
};
