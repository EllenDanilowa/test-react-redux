import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Button from './button';

describe('Button', () => {
  const title = 'Title';

  const createElement = (props, isSnapshot = true) => {
    const template = (<Button {...props} />);

    return isSnapshot ?
      renderer.create(template).toJSON() :
      shallow(template);
  };

  it('renders component with defined title and button type', () => {
    const type = 'button';
    const element = createElement({title, type});

    expect(element).toMatchSnapshot();
  });

  it('renders component with default props', () => {
    const element = createElement({title});

    expect(element).toMatchSnapshot();
  });

  it('sets click callback and triggers if clicked', () => {
    const onClick = jest.fn();
    const element = createElement({title, onClick}, false);

    element.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
