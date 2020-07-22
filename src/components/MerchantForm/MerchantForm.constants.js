const EMAIL_REGEX = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

export const DEFAULT_ERROR_MESSAGE = 'Oops are you sure? – this doesn’t look right';

export const FIELDS = {
  FIRST_NAME: {
    name: 'firstname',
    defaultValue: '',
    rules: {required: true, min: 2, max: 50},
    errorMessage: 'Please enter valid first name'
  },
  LAST_NAME: {
    name: 'lastname',
    defaultValue: '',
    rules: {required: true, min: 2, max: 50},
    errorMessage: 'Please enter valid last name'
  },
  EMAIL: {
    name: 'email',
    defaultValue: '',
    rules: {required: true, regexp: EMAIL_REGEX},
    errorMessage: 'Please enter valid email'
  },
  PHONE: {
    name: 'phone',
    defaultValue: '',
    rules: {required: true},
    errorMessage: 'Please enter valid phone number'
  },
  HAS_PREMIUM: {
    name: 'hasPremium',
    defaultValue: false
  }
};
