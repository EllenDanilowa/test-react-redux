import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MerchantList from '../../components/merchant-list/merchant-list';
import {Title, PageWrapper} from '../route.styled';
import {Header, Icon} from './all-merchants.styled';
import PlusIcon from './assets/plus.svg';

const AllMerchants = ({loading, error, merchants, count, deleteMerchant, fetchMerchants, updateVisibleMerchants, fetched}) => {
  useEffect(() => {
     if (!fetched) fetchMerchants();
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
        {!(error || loading) && Boolean(count) && (
          <MerchantList count={count}
                        merchants={merchants}
                        deleteMerchant={deleteMerchant}
                        updateVisibleMerchants={updateVisibleMerchants}/>
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
  fetched: PropTypes.bool,
  merchants: PropTypes.array,
  count: PropTypes.number.isRequired,
  deleteMerchant: PropTypes.func.isRequired,
  fetchMerchants: PropTypes.func.isRequired,
  updateVisibleMerchants: PropTypes.func.isRequired
};

AllMerchants.defaultProps = {
  loading: false,
  error: false
};

export default AllMerchants;
