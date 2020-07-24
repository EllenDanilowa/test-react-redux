import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe('App', () => {
  let element;

  const createElement = () => {
    const template = (<App/>);

    return renderer.create(template).toJSON();
  };

  it('renders component correctly', () => {
    element = createElement();

    expect(element).toMatchSnapshot();
  });
});
