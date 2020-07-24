import React from 'react';
import renderer from 'react-test-renderer';
import AllMerchants from "./all-merchants.component";
import {MemoryRouter} from 'react-router';

jest.mock('../../components/merchant-list/merchant-list', () => () => 'Merchant List component');

describe('AllMerchants', () => {
  let element;
  let merchants;
  let merchantsCount;
  let deleteMerchant;
  let fetchMerchants;
  let updateVisibleMerchants;

  const createElement = (props) => {
    const template = (<MemoryRouter><AllMerchants {...props}/></MemoryRouter>);

    return renderer.create(template).toJSON();
  };

  beforeEach(() => {
    merchantsCount = 0;
    deleteMerchant = () => {};
    updateVisibleMerchants = () => {};
    fetchMerchants = jest.fn();
    merchants = [];

    jest.spyOn(React, 'useEffect').mockImplementation((cb) => cb());
  });

  it('fetches merchants on mounting', () => {
    element = createElement({merchants, merchantsCount, deleteMerchant, fetchMerchants, updateVisibleMerchants});

    expect(fetchMerchants).toHaveBeenCalled();
  });

  it('renders component with loading message when loading', () => {
    const loading = true;
    element = createElement({loading, merchants, merchantsCount, deleteMerchant, fetchMerchants, updateVisibleMerchants});

    expect(fetchMerchants).toHaveBeenCalled();
    expect(element).toMatchSnapshot();
  });

  it('renders component with error message if error', () => {
    const error = true;
    element = createElement({error, merchants, merchantsCount, deleteMerchant, fetchMerchants, updateVisibleMerchants});

    expect(element).toMatchSnapshot();
  });

  it('renders component with merchant list if count is greater than 0', () => {
    merchantsCount = 5;
    element = createElement({merchants, merchantsCount, deleteMerchant, fetchMerchants, updateVisibleMerchants});

    expect(element).toMatchSnapshot();
  });

  it('renders no main content if count is equal to 0', () => {
    merchantsCount = 0;
    element = createElement({merchants, merchantsCount, deleteMerchant, fetchMerchants, updateVisibleMerchants});

    expect(element).toMatchSnapshot();
  });
});
