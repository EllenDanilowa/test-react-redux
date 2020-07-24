import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './accordion';
import {
  Label,
  ArrowDown,
  ArrowUp
} from './accordion.styled';

describe('Accordion', () => {
  let element;
  let title;
  let childrenId;
  let children;

  beforeEach(() => {
    title = 'Title';
    childrenId = '#children';
    children = React.createElement('p', {id: childrenId.slice(1)}, 'accordion content');

    element = shallow(<Accordion title={title}>{children}</Accordion>);
  });

  it('sets label', () => {
    expect(element.find(Label).text()).toBe(title);
  });

  it('hides content if not opened', () => {
    expect(element.find(ArrowDown).length).toBe(1);
    expect(element.find(childrenId).length).toBe(0);
  });

  it('shows content if opened', () => {
    element.find(Label).simulate('click');

    expect(element.find(ArrowUp).length).toBe(1);
    expect(element.find(childrenId).length).toBe(1);
  });
});
