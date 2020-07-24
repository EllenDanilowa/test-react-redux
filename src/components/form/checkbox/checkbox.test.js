import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './checkbox';
import {Label, HiddenInput} from '../form.styled';
import {StyledCheckbox, Title} from './checkbox.styled';

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

    element = shallow(<Checkbox refFunc={ref} name={name} title={title} checked={checked}/>)
  });

  it('sets htmlFor to label', () => {
    expect(element.find(Label).prop('htmlFor')).toBe(name);
  });

  it('sets id, name, ref and type to input', () => {
    const input = element.find(HiddenInput);

    expect(input.prop('id')).toBe(name);
    expect(input.prop('name')).toBe(name);
    expect(input.getElement().ref).toBe(ref);
    expect(input.prop('type')).toBe('checkbox');
  });

  it('sets checked prop to fake checkbox', () => {
    expect(element.find(StyledCheckbox).prop('checked')).toBe(checked);
  });

  it('sets title', () => {
    expect(element.find(Title).text()).toBe(title);
  });
});
