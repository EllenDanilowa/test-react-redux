import React from 'react';
import renderer from 'react-test-renderer';
import FileInput from './file-input';

describe('FileInput', () => {
  let element;
  let title;
  let name;
  let ref;

  const createElement = ({ref, ...props}) => (
    renderer.create(<FileInput refFunc={ref} {...props}/>).toJSON()
  );

  beforeEach(() => {
    title = 'Title';
    name = 'name';
    ref = () => {};
  });

  it('renders component with all defined props', () => {
    const alt = 'alt title';
    element = createElement({name, ref, title, alt});

    expect(element).toMatchSnapshot();
  });

  it('renders component with additional props', () => {
    const accept = 'image/*';
    element = createElement({name, ref, title, accept});

    expect(element).toMatchSnapshot();
  });

  it('renders component with default props', () => {
    element = createElement({name, ref, title});

    expect(element).toMatchSnapshot();
  });
});
