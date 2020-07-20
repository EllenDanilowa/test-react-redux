import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';

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
        <MerchantForm submit={this.createMerchant}
                      title="Create a new merchant"
                      submitTitle="Create"/>
      </div>
    );
  }
}

NewMerchant.propTypes = {
  createMerchant: PropTypes.func.isRequired
};

export default NewMerchant;
