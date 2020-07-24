import React from 'react';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Merchant from './merchant';
import {DeleteButton} from './merchant.styled';

jest.mock('./bid/bid', () => () => 'Bid component');
jest.mock('./accordion/accordion', () => ({children}) => (<div><p>Accordion</p><div>'{children}'</div></div>));

describe('Merchant', () => {
  let element;
  let item;
  let deleteFunc;

  const createElement = ({deleteFunc, ...props}, isSnapshot = true) => {
    const template = (<MemoryRouter><Merchant delete={deleteFunc} {...props} /></MemoryRouter>);

    return isSnapshot ?
      renderer.create(template).toJSON() :
      mount(template);
  };

  beforeEach(() => {
    item = {
      id: '1',
      firstname: 'name',
      lastname: 'lastname',
      avatarUrl: '',
      email: 'test@test.com',
      phone: '123456789',
      hasPremium: false,
      bids: []
    };
    deleteFunc = jest.fn();
  });

  it('renders merchant with bids', () => {
    item.bids.push({
      id: '1',
      carTitle: 'title',
      amount: 2500,
      created: 1595116800000
    });

    element = createElement({item, deleteFunc});

    expect(element).toMatchSnapshot();
  });

  it('renders merchant without bids', () => {
    element = createElement({item, deleteFunc});

    expect(element).toMatchSnapshot();
  });

  it('renders premium merchant', () => {
    item.hasPremium = true;
    element = createElement({item, deleteFunc});

    expect(element).toMatchSnapshot();
  });

  it('triggers delete callback if delete button is clicked', () => {
    element = createElement({item, deleteFunc}, false);

    element.find(DeleteButton).simulate('click');
    expect(deleteFunc).toHaveBeenCalledWith(item.id);
  });
});
