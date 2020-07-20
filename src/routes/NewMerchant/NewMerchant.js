import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';
import {addNewMerchant} from '../../redux/merchant/merchant.actions';
import {connect} from 'react-redux';

class NewMerchant extends Component {
  constructor(props) {
    super(props);

    this.createMerchant = this.createMerchant.bind(this);
  }

  createMerchant(merchant) {
    this.props.createMerchant(merchant);
  }

  render() {
    return (
      <div>
        <h3>Create a new merchant</h3>
        <MerchantForm submit={this.createMerchant} submitTitle="Create"/>
      </div>
    );
  }
}

NewMerchant.propTypes = {
  createMerchant: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  createMerchant: (merchant) => {
    dispatch(addNewMerchant(merchant));
  }
});

export default connect(() => ({}), mapDispatchToProps)(NewMerchant);
