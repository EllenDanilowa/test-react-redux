import React from 'react';
import {shallow} from 'enzyme';
import FileInput from './file-input';
import {Label} from './file-input.styled';
import {HiddenInput} from '../form.styled';

describe('FileInput', () => {
  let element;
  let title;
  let name;
  let ref;

  const createInput = ({ref, ...props}) => {
    return shallow(<FileInput refFunc={ref} {...props}/>)
  }

  beforeEach(() => {
    title = 'Title';
    name = 'name';
    ref = () => {};

    element = createInput({ref, name, title});
  });

  it('sets htmlFor to label', () => {
    expect(element.find(Label).prop('htmlFor')).toBe(name);
  });

  it('sets title', () => {
    expect(element.find(Label).text()).toBe(title);
  });

  it('sets id, name, ref and type to input', () => {
    const input = element.find(HiddenInput);

    expect(input.prop('id')).toBe(name);
    expect(input.prop('name')).toBe(name);
    expect(input.getElement().ref).toBe(ref);
    expect(input.prop('type')).toBe('file');
  });

  it('sets additional props to input if exists', () => {
    const accept = 'image/*';
    element = createInput({ref, name, title, accept});

    expect(element.find(HiddenInput).prop('accept')).toBe(accept);
  });
});
