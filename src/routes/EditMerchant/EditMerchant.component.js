import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';

class EditMerchant extends Component {
  constructor(props) {
    super(props);

    //const id = this.props.match.params.id;
    this.item = {};
    this.editMerchant = this.editMerchant.bind(this);
  }

  editMerchant(merchant) {
    this.props.editMerchant(merchant);
  }

  render() {
    return (
      <div>
        <MerchantForm initValue={this.item}
                      submit={this.editMerchant}
                      title="Edit a merchant"
                      submitTitle="Update"/>
      </div>
    );
  }
}

EditMerchant.propTypes = {
  editMerchant: PropTypes.func.isRequired
};

export default EditMerchant;
