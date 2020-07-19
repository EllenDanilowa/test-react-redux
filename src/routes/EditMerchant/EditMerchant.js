import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';
import {editMerchant} from "../../redux/actions/merchant";
import {connect} from "react-redux";

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
        <h3>Edit a merchant</h3>
        <MerchantForm initValue={this.item}/>
      </div>
    );
  }
}

EditMerchant.propTypes = {
  editMerchant: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  editMerchant: (merchant) => {
    dispatch(editMerchant(merchant));
  }
});

export default connect(() => ({}), mapDispatchToProps)(EditMerchant);
