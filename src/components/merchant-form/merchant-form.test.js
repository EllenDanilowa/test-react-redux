import React from 'react';
import * as FormHook from 'react-hook-form';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';
import MerchantForm from './merchant-form';
import {mount} from 'enzyme';
import {getDefaultMerchant} from './merchant-form.utils';
import {FIELDS} from './merchant-form.constants';

jest.mock('../form/input/input', () => () => 'Input component');
jest.mock('../form/file-input/file-input', () => () => 'File Input component');
jest.mock('../form/checkbox/checkbox', () => () => 'Checkbox component');
jest.mock('../form/button/button', () => () => 'Button component');
jest.mock('./avatar-preview/avatar-preview', () => () => 'Avatar Preview component');

describe('MerchantForm', () => {
  let element;
  let submit;
  let submitTitle;

  const createElement = (props, isSnapshot = true) => {
    const template = (<MemoryRouter><MerchantForm {...props}/></MemoryRouter>);

    return isSnapshot ?
      renderer.create(template).toJSON() :
      mount(template);
  };

  beforeEach(() => {
    submit = jest.fn();
    submitTitle = 'Submit';
  });

  it('renders component with defined merchant', () => {
    const merchant = {
      id: '1',
      firstname: 'name',
      lastname: 'lastname',
      avatarUrl: 'avatar/url',
      email: 'test@test.com',
      phone: '123456789',
      hasPremium: true,
      bids: []
    };
    element = createElement({submit, submitTitle, merchant});

    expect(element).toMatchSnapshot();
  });

  it('renders component by default', () => {
    element = createElement({submit, submitTitle});

    expect(element).toMatchSnapshot();
  });

  it('inits useForm hook and watchers', () => {
    const merchant = {
      id: '1',
      firstname: 'name',
      lastname: 'lastname',
      avatarUrl: 'avatar/url',
      email: 'test@test.com',
      phone: '123456789',
      hasPremium: true,
      bids: []
    };
    const watch = jest.fn().mockImplementation(() => ({}));
    const useFormSpy = jest.spyOn(FormHook, 'useForm').mockImplementation(() => ({
      handleSubmit: () => {},
      register: () => {},
      watch,
      errors: {}
    }));

    element = createElement({merchant, submit, submitTitle});

    expect(useFormSpy).toHaveBeenCalledWith({defaultValues: merchant});
    expect(watch).toHaveBeenCalledWith([FIELDS.HAS_PREMIUM.name, FIELDS.AVATAR.name]);
  });
});

describe('MerchantForm utils', () => {
  describe('getDefaultMerchant', () => {
    it('returns default state from settings', () => {
      const settings = {
        name: {name: 'name', defaultValue: 'test'},
        phone: {name: 'phone', defaultValue: '23456789'}
      };
      const expectedObj = {
        name: 'test',
        phone: '23456789'
      };

      expect(getDefaultMerchant(settings)).toEqual(expectedObj);
    });
  });
});
