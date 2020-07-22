import React from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';

const NewMerchant = ({createMerchant}) => {
  const create = (merchant) => createMerchant(merchant);

  return (
    <div>
      <MerchantForm submit={create}
                    title="Create a new merchant"
                    submitTitle="Create"/>
    </div>
  );
};

NewMerchant.propTypes = {
  createMerchant: PropTypes.func.isRequired
};

export default NewMerchant;
