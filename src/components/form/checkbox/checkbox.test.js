import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './checkbox';

describe('Checkbox', () => {
  let element;
  let title;
  let name;
  let ref;
  let checked;

  beforeEach(() => {
    title = 'Title';
    name = 'name';
    ref = () => {};
    checked = true;
  });

  it('renders component with defined props', () => {
    element = renderer.create(<Checkbox refFunc={ref} name={name} title={title} checked={checked}/>).toJSON();

    expect(element).toMatchSnapshot();
  });
});
