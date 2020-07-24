import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
  const title = 'Title';

  const createButton = (props) => {
    return shallow(<Button title={title} {...props} />);
  }

  it('sets title', () => {
    const element = createButton();

    expect(element.prop('value')).toBe(title);
  });

  it('sets button type', () => {
    const type = 'button';
    const element = createButton({type});

    expect(element.prop('type')).toBe(type);
  });

  it('sets click callback', () => {
    const onClick = jest.fn();
    const element = createButton({onClick})

    element.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  it('inits default click callback and type', () => {
    const element = createButton();

    expect(element.prop('onClick')).toEqual(expect.any(Function));
    expect(element.prop('type')).toBe('button');
  });
});
