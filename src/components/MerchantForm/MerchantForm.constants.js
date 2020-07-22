const EMAIL_REGEX = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

export const FIELDS = {
  FIRST_NAME: {
    name: 'firstname',
    label: 'First name',
    defaultValue: '',
    rules: {required: true, minLength: 2, maxLength: 50},
    errorMessage: 'Please enter valid first name'
  },
  LAST_NAME: {
    name: 'lastname',
    label: 'Last name',
    defaultValue: '',
    rules: {required: true, minLength: 2, maxLength: 50},
    errorMessage: 'Please enter valid last name'
  },
  EMAIL: {
    name: 'email',
    label: 'Email',
    defaultValue: '',
    rules: {required: true, pattern: EMAIL_REGEX},
    errorMessage: 'Please enter valid email'
  },
  PHONE: {
    name: 'phone',
    label: 'Phone number',
    defaultValue: '',
    rules: {required: true},
    errorMessage: 'Please enter valid phone number'
  },
  HAS_PREMIUM: {
    name: 'hasPremium',
    label: 'Premium',
    defaultValue: false
  },
  AVATAR: {
    name: 'avatar',
    label: 'Avatar'
  }
};
