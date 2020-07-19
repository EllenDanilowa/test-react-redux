import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  hasPremium: false
};

class MerchantForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.initValue || INITIAL_STATE;

    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handlePremiumChange = this.handlePremiumChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstnameChange(event) {
    this.setState({firstname: event.target.value});
  }

  handleLastnameChange(event) {
    this.setState({lastname: event.target.value});
  }

  handleAvatarChange(event) {
    this.setState({avatar: event.target.files[0]});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  handlePremiumChange(event) {
    this.setState({hasPremium: event.target.value});
  }

  handleSubmit(event) {
    console.log('SUBMIT');
    console.log(this.state);
    this.props.submit(this.state);

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" id="firstname" value={this.state.firstname}
                   onChange={this.handleFirstnameChange} required/>
          </div>
          <div>
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" id="lastname" value={this.state.lastname}
                   onChange={this.handleLastnameChange} required/>
          </div>
          <div>
            <label htmlFor="avatar">Avatar</label>
            <input type="file" name="avatar" id="avatar" accept="image/*" ref={this.avatarRef}
                   onChange={this.handleAvatarChange}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange}
                   required/>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" value={this.state.phone} onChange={this.handlePhoneChange}
                   required/>
          </div>
          <div>
            <label htmlFor="hasPremium">Premium</label>
            <input type="checkbox" name="hasPremium" id="hasPremium" value={this.state.hasPremium}
                   onChange={this.handlePremiumChange}/>
          </div>

          <div>choose bids</div>

          <input type="submit" value="Submit"/>
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
  submit: PropTypes.func.isRequired
};

export default MerchantForm;
