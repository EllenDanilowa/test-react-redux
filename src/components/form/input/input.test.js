import React from 'react';
import renderer from 'react-test-renderer';
import Input from './input';

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
    return renderer.create(<Input refFunc={ref} {...props}/>).toJSON();
  };

  beforeEach(() => {
    title = 'Title';
    name = 'name';
    ref = () => {};
    placeholder = 'placeholder';
    type = 'number';
    error = {};
    errorMessage = 'error message';
  });

  it('renders component correctly', () => {
    element = createInput({ref, name, title, placeholder, type, error, errorMessage});

    expect(element).toMatchSnapshot();
  });

  it('renders component with no error message if no error', () => {
    element = createInput({ref, name, title, placeholder, type});

    expect(element).toMatchSnapshot();
  });

  it('renders component with default props correctly', () => {
    element = createInput({ref, name, title});

    expect(element).toMatchSnapshot();
  });
});
