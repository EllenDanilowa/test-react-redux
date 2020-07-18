import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewMerchantPage extends Component {
  constructor(props) {
    super(props);

    //this.avatarRef = createRef(); // this.avatarRef.current.files[0].name

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      hasPremium: false
    };
  }

  handleFirstnameChange(event) {
    //this.setState({firstname: event.target.value});
  }

  handleLastnameChange(event) {
   // this.setState({lastname: event.target.value});
  }

  handleAvatarChange(event) {
   // this.setState({avatar: event.target.value});
  }

  handleEmailChange(event) {
   // this.setState({email: event.target.value});
  }

  handlePhoneChange(event) {
   // this.setState({phone: event.target.value});
  }

  handlePremiumChange(event) {
    // this.setState({hasPremium: event.target.value});
  }

  handleSubmit(event) {
    console.log('SUBMIT');
    debugger;

    const form = event.target;
    const data = new FormData(form);

    event.preventDefault();
  }

  render() {

    return (
      <div>
        <h3>Create a new merchant</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={this.handleFirstnameChange} required/>
          </div>
          <div>
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" id="lastname" value={this.state.lastname} onChange={this.handleLastnameChange} required/>
          </div>
          {/* <div>
            <label htmlFor="avatar">Avatar</label>
            <input type="file" name="avatar" id="avatar" accept="image/*" ref={this.avatarRef} onChange={this.handleAvatarChange}/>
          </div> */}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange} required/>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" value={this.state.phone} onChange={this.handlePhoneChange} required/>
          </div>
          <div>
            <label htmlFor="hasPremium">Premium</label>
            <input type="checkbox" name="hasPremium" id="hasPremium" value={this.state.hasPremium} onChange={this.handlePremiumChange}/>
          </div>

          <div>choose bids</div>

          <input type="submit" value="Submit" />
        </form>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}


export default NewMerchantPage;