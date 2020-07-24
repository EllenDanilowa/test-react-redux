import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Accordion from './accordion';
import {
  Label,
  ArrowUp
} from './accordion.styled';

describe('Accordion', () => {
  let element;
  let title;
  let childrenId;
  let children;

  const createElement = ({title, children}, isSnapshot = true) => {
    const template = (<Accordion title={title}>{children}</Accordion>);

    return isSnapshot ?
      renderer.create(template).toJSON() :
      shallow(template);
  };

  beforeEach(() => {
    title = 'Title';
    childrenId = '#children';
    children = React.createElement('p', {id: childrenId.slice(1)}, 'accordion content');
  });

  it('renders component correctly', () => {
    element = createElement({title, children});

    expect(element).toMatchSnapshot();
  });

  it('shows content if opened', () => {
    element = createElement({title, children}, false);

    element.find(Label).simulate('click');

    expect(element.find(ArrowUp).length).toBe(1);
    expect(element.find(childrenId).length).toBe(1);
  });
});
