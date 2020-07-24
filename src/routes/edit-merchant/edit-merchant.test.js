import React from 'react';
import renderer from 'react-test-renderer';
import EditMerchant from './edit-merchant.component';

jest.mock('../../components/merchant-form/merchant-form', () => () => 'Merchant Form component');

describe('EditMerchant', () => {
  let element;
  let merchant;
  let updateMerchant;

  const createElement = (props) => {
    const template = (<EditMerchant {...props}/>);

    return renderer.create(template).toJSON();
  };

  beforeEach(() => {
    merchant = {};
    updateMerchant = jest.fn();
  });

  it('renders component correctly', () => {
    element = createElement({merchant, updateMerchant});

    expect(element).toMatchSnapshot();
  });
});
