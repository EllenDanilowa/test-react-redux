import React from 'react';
import {shallow} from 'enzyme';
import Input, {DEFAULT_ERROR_MESSAGE} from './input';
import {InputElement, ErrorMessage} from './input.styled';
import {Label} from '../form.styled';

describe('Input', () => {
  let element;
  let title;
  let name;
  let ref;
  let placeholder;
  let type;
  let error;
  let errorMessage;

  const createInput = ({ref, ...props}) => {
    return shallow(<Input refFunc={ref} {...props}/>)
  }

  beforeEach(() => {
    title = 'Title';
    name = 'name';
    ref = () => {};
    placeholder = 'placeholder';
    type = 'number';
    error = {};
    errorMessage = 'error message';

    element = createInput({ref, name, title, placeholder, type, error, errorMessage});
  });

  it('sets htmlFor prop and title to label', () => {
    const label = element.find(Label);

    expect(label.prop('htmlFor')).toBe(name);
    expect(label.text()).toBe(title);
  });

  it('sets props to input', () => {
    const input = element.find(InputElement);

    expect(input.prop('id')).toBe(name);
    expect(input.prop('name')).toBe(name);
    expect(input.getElement().ref).toBe(ref);
    expect(input.prop('placeholder')).toBe(placeholder);
    expect(input.prop('type')).toBe(type);
    expect(input.prop('error')).toBe(true);
  });

  it('shows error message if error', () => {
    expect(element.find(ErrorMessage).text()).toBe(errorMessage);
  });

  it('shows default error message if error', () => {
    element = createInput({ref, name, title, error});

    expect(element.find(ErrorMessage).text()).toBe(DEFAULT_ERROR_MESSAGE);
  });

  it('sets empty placeholder, type text and hide errors if not exist', () => {
    element = createInput({ref, name, title});
    const input = element.find(InputElement);

    expect(input.prop('placeholder')).toBe('');
    expect(input.prop('type')).toBe('text');
    expect(input.prop('error')).toBe(false);
    expect(element.find(ErrorMessage).length).toBe(0);
  });
});
