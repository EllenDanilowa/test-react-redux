import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';

const EMAIL_REGEX = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const FIELD_NAMES = {
  FIRST_NAME: {
    name: 'firstname',
    defaultValue: '',
    rules: {required: true, min: 2, max: 50}
  },
  LAST_NAME: {
    name: 'lastname',
    defaultValue: '',
    rules: {required: true, min: 2, max: 50}
  },
  EMAIL: {
    name: 'email',
    defaultValue: '',
    rules: {required: true, regexp: EMAIL_REGEX}
  },
  PHONE: {
    name: 'phone',
    defaultValue: '',
    rules: {required: true}
  },
  HAS_PREMIUM: {
    name: 'hasPremium',
    defaultValue: false
  }
};

const createInitialState = (initObj = {}) => {
  const state = {errors: {}};
  Object.values(FIELD_NAMES).forEach((field) => {
    const {name, defaultValue} = field;

    state[name] = initObj[name] || defaultValue;
    state.errors[name] = null;
  });

  return state;
};

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val && (valid = false)
  );
  return valid;
};

class MerchantForm extends Component {
  constructor(props) {
    super(props);

    this.state = createInitialState(this.props.initValue);

    this.onFormChange = this.onFormChange.bind(this);
    // this.onAvatarChange = this.onAvatarChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFormChange(event) {
    event.preventDefault();
    const {name, value} = event.target;
    const errors = this.state.errors;

    const settings = Object.values(FIELD_NAMES).find((field) => field.name === name);

    if (!settings) return; // TODO error???

    const {rules} = settings;

    if (rules.required) {
      errors[name] = value.length !== 0;
    } else if (rules.max) {
      errors[name] = value.length > rules.max;
    } else if (rules.min) {
      errors[name] = value.length < rules.min;
    } else if (rules.regexp) {
      errors[name] = rules.regexp.test(value);
    }

    this.setState({errors, [name]: value});
  }

  //
  // onAvatarChange(event) {
  //   this.setState({avatar: event.target.files[0]});
  // }

  onSubmit(event) {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      this.props.submit(this.state);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} noValidate>
          <Input name="firstname"
                 title="First name"
                 value={this.state.firstname}
                 onChange={this.onFormChange}/>
          <Input name="lastname"
                 title="Last name"
                 value={this.state.lastname}
                 onChange={this.onFormChange}/>
          <Input name="email"
                 title="Email"
                 value={this.state.email}
                 onChange={this.onFormChange}/>
          <Input name="phone"
                 type="tel"
                 title="Phone"
                 value={this.state.phone}
                 onChange={this.onFormChange}/>
          <Input name="hasPremium"
                 type="checkbox"
                 title="Premium"
                 value={this.state.hasPremium}
                 onChange={this.onFormChange}/>

          {/*<div>*/}
          {/*  <label htmlFor="avatar">Avatar</label>*/}
          {/*  <input type="file" name="avatar" id="avatar" accept="image/*" ref={this.avatarRef}*/}
          {/*         onChange={this.onAvatarChange}/>*/}
          {/*</div>*/}

          <Button title={this.props.submitTitle} type="submit"/>
        </form>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}

MerchantForm.propTypes = {
  initValue: PropTypes.shape({
    id: PropTypes.string,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    hasPremium: PropTypes.bool.isRequired,
    bids: PropTypes.array
  }),
  submit: PropTypes.func.isRequired,
  submitTitle: PropTypes.string.isRequired
};

export default MerchantForm;
