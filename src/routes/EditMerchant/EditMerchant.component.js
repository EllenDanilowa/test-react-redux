import React from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';

const EditMerchant = ({merchant, updateMerchant}) => {
  const update = (item) => updateMerchant(item);

  return (
    <div>
      <MerchantForm merchant={merchant}
                    submit={update}
                    title="Edit a merchant"
                    submitTitle="Update"/>
    </div>
  );
};

EditMerchant.propTypes = {
  updateMerchant: PropTypes.func.isRequired,
  merchant: PropTypes.object,
};

export default EditMerchant;
