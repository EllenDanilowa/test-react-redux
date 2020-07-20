import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import {Title} from './MerchantForm.styled';
import {
  DEFAULT_ERROR_MESSAGE,
  FIELDS
} from './MerchantForm.constants';

const createInitialState = (initObj = {}) => {
  const state = {errors: {}};
  Object.values(FIELDS).forEach((field) => {
    const {name, defaultValue} = field;

    state[name] = initObj[name] || defaultValue;
    state.errors[name] = '';
  });

  return state;
};

const validateForm = (errors) => {
  let valid = true;

  Object.values(errors).forEach((val) => (
    val.length && (valid = false)
  ));

  return valid;
};

class MerchantForm extends Component {
  constructor(props) {
    super(props);

    this.state = createInitialState(this.props.initValue);

    this.onInputChange = this.onInputChange.bind(this);
    // this.onAvatarChange = this.onAvatarChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validateForm() {
    const errors = {};

    Object.values(FIELDS).forEach((field) => {
      const {rules = {}, name} = field;
      const value = this.state[field.name];

      if (rules.required) {
        errors[name] = value.length === 0;
      }

      if (rules.max) {
        errors[name] = value.length > rules.max;
      }

      if (rules.min) {
        errors[name] = value.length < rules.min;
      }

      if (rules.regexp) {
        errors[name] = !rules.regexp.test(value);
      }

      errors[name] = errors[name] ? (field.errorMessage || DEFAULT_ERROR_MESSAGE) : '';
    });

    this.setState({errors});

    return validateForm(errors);
  }

  onInputChange(event) {
    const {name, value} = event.target;
    const {errors} = this.state;

    errors[name] = '';
    this.setState({errors, [name]: value});
  }

  //
  // onAvatarChange(event) {
  //   this.setState({avatar: event.target.files[0]});
  // }

  onSubmit(event) {
    event.preventDefault();

    if (this.validateForm()) {
      this.props.submit(this.state);
    }
  }

  render() {
    return (
      <div>
        {this.props.title && (
          <Title>{this.props.title}</Title>
        )}
        <form onSubmit={this.onSubmit} noValidate>
          <Input name="firstname"
                 title="First name"
                 error={this.state.errors.firstname}
                 value={this.state.firstname}
                 onChange={this.onInputChange}/>
          <Input name="lastname"
                 title="Last name"
                 error={this.state.errors.lastname}
                 value={this.state.lastname}
                 onChange={this.onInputChange}/>
          <Input name="email"
                 title="Email"
                 error={this.state.errors.email}
                 value={this.state.email}
                 onChange={this.onInputChange}/>
          <Input name="phone"
                 type="tel"
                 title="Phone"
                 error={this.state.errors.phone}
                 value={this.state.phone}
                 onChange={this.onInputChange}/>
          <Input name="hasPremium"
                 type="checkbox"
                 title="Premium"
                 value={this.state.hasPremium}
                 onChange={this.onInputChange}/>

          {/*<div>*/}
          {/*  <label htmlFor="avatar">Avatar</label>*/}
          {/*  <input type="file" name="avatar" id="avatar" accept="image/*" ref={this.avatarRef}*/}
          {/*         onChange={this.onAvatarChange}/>*/}
          {/*</div>*/}

          <Button title={this.props.submitTitle}/>
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
  submitTitle: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default MerchantForm;
