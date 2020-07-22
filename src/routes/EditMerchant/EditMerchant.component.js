import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';

class EditMerchant extends Component {
  constructor(props) {
    super(props);

    this.editMerchant = this.editMerchant.bind(this);
  }

  editMerchant(merchant) {
    this.props.editMerchant(merchant);

  }

  render() {
    return (
      <div>
        <MerchantForm initValue={this.props.merchant}
                      submit={this.editMerchant}
                      title="Edit a merchant"
                      submitTitle="Update"/>
      </div>
    );
  }
}

EditMerchant.propTypes = {
  editMerchant: PropTypes.func.isRequired,
  merchant: PropTypes.object,
};

export default EditMerchant;
