import React from 'react';
import renderer from 'react-test-renderer';
import NewMerchant from './new-merchant.component';

jest.mock('../../components/merchant-form/merchant-form', () => () => 'Merchant Form component');

describe('NewMerchant', () => {
  let element;
  let createMerchant;

  const createElement = (props) => {
    const template = (<NewMerchant {...props}/>);

    return renderer.create(template).toJSON();
  };

  beforeEach(() => {
    createMerchant = jest.fn();
  });

  it('renders component correctly', () => {
    element = createElement({createMerchant});

    expect(element).toMatchSnapshot();
  });
});
