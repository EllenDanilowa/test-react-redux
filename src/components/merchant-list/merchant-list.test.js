import React from 'react';
import renderer from 'react-test-renderer';
import MerchantList from './merchant-list';
import {mount} from 'enzyme';

/* eslint-disable react/display-name, react/prop-types */
jest.mock('react-paginate', () => ({pageCount}) => (<div><p id="pageCount">&apos;{pageCount}&apos;</p></div>));
jest.mock('../merchant/merchant', () => ({item}) => (<div>merchant: &apos;{item.firstname} {item.lastname}&apos;</div>));
/* eslint-enable react/display-name, react/prop-types */

describe('MerchantList', () => {
  let element;
  let count;
  let deleteMerchant;
  let updateVisibleMerchants;
  let merchants;

  const createElement = (props, isSnapshot = true) => {
    const template = (<MerchantList {...props}/>);

    return isSnapshot ?
      renderer.create(template).toJSON() :
      mount(template);
  };

  beforeEach(() => {
    count = 2;
    deleteMerchant = () => {};
    updateVisibleMerchants = jest.fn();
    merchants = [
      {
        id: '1',
        firstname: 'name',
        lastname: 'lastname',
        avatarUrl: '',
        email: 'test@test.com',
        phone: '123456789',
        hasPremium: false,
        bids: []
      },
      {
        id: '2',
        firstname: 'name 2',
        lastname: 'lastname 2',
        avatarUrl: '',
        email: 'test2@test.com',
        phone: '123456789',
        hasPremium: true,
        bids: []
      }
    ];

    jest.spyOn(React, 'useEffect').mockImplementation((cb) => cb());
  });

  it('updates visible merchants on mounting', () => {
    element = createElement({deleteMerchant, updateVisibleMerchants, merchants, count});

    expect(updateVisibleMerchants).toHaveBeenCalled();
  });

  it('renders component', () => {
    element = createElement({deleteMerchant, updateVisibleMerchants, merchants, count});

    expect(element).toMatchSnapshot();
  });

  it('hides pagination and list of merchants if no merchants', () => {
    count = 0;
    element = createElement({deleteMerchant,updateVisibleMerchants, count});

    expect(element).toMatchSnapshot();
  });
});
