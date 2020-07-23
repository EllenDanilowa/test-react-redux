import React from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/MerchantForm/MerchantForm';
import {PageWrapper, Title} from '../Route.styled';

const NewMerchant = ({createMerchant}) => {
  const create = (merchant) => createMerchant(merchant);

  return (
    <PageWrapper>
      <Title>Create a new merchant</Title>
      <MerchantForm submit={create}
                    submitTitle="Create"/>
    </PageWrapper>
  );
};

NewMerchant.propTypes = {
  createMerchant: PropTypes.func.isRequired
};

export default NewMerchant;
