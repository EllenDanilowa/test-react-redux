import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Merchant from '../../components/Merchant/Merchant';
import {Title, PageWrapper} from '../Route.styled';
import {Header, Icon} from './AllMerchants.styled';
import PlusIcon from './assets/plus.svg';

const AllMerchants = ({loading, error, merchants, deleteMerchant, fetchMerchants}) => {
  useEffect(() => {
    if (merchants.length) return; //Temp: remove, coz we always should get refreshed data from server

    fetchMerchants();
  }, []);

  return (
    <PageWrapper>
      <Header>
        <Title>All merchants</Title>
        <div>
          <Link to='/create'>
            <Icon src={PlusIcon}/>
            Add new merchant
          </Link>
        </div>
      </Header>
      <div>
        {!(error || loading) && merchants && merchants.map((merchant) =>
          <Merchant
            key={merchant.id}
            item={merchant}
            delete={deleteMerchant}
          />
        )}
        {loading && <p>Loading...</p>}
        {error && <p>Sorry, we could not load data</p>}
      </div>
    </PageWrapper>
  );
};

AllMerchants.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  merchants: PropTypes.array,
  deleteMerchant: PropTypes.func.isRequired,
  fetchMerchants: PropTypes.func.isRequired
};

export default AllMerchants;
