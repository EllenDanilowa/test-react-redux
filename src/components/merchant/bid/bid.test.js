import React from 'react';
import renderer from 'react-test-renderer';
import Bid from './bid';

describe('Bid', () => {
  let element;
  let item;

  beforeEach(() => {
    item = {
      id: '1',
      carTitle: 'title',
      amount: 2500,
      created: 1595116800000
    };
  });

  it('renders component with defined props and formats date', () => {
    element = renderer.create(<Bid item={item}/>).toJSON();

    expect(element).toMatchSnapshot();
  });
});
