import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';

class EditMerchant extends Component {
  constructor(props) {
    super(props);

    this.updateMerchant = this.updateMerchant.bind(this);
  }

  updateMerchant(merchant) {
    this.props.updateMerchant(merchant);
  }

  render() {
    return (
      <div>
        <MerchantForm initValue={this.props.merchant}
                      submit={this.updateMerchant}
                      title="Edit a merchant"
                      submitTitle="Update"/>
      </div>
    );
  }
}

EditMerchant.propTypes = {
  updateMerchant: PropTypes.func.isRequired,
  merchant: PropTypes.object,
};

export default EditMerchant;
