import React, {useEffect, useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-paginate';
import Merchant from '../merchant/merchant';
import {PaginationWrapper, PAGINATION_CLASS_NAMES} from './merchant-list.styled';
import {
  DEFAULT_LIMIT,
  PAGE_RANGE_DISPLAYED,
  MARGIN_PAGES_DISPLAYED,
  LABELS
} from './merchant-list.constants';

const MerchantList = ({limit, merchants, count, deleteMerchant, updateVisibleMerchants}) => {
  const [offset, setOffset] = useState(0);
  const pageCount = Math.ceil(count / limit);
  const handlePageClick = ({selected}) => {
    const newOffset = Math.ceil(selected * limit);

    setOffset(newOffset);
    updateVisibleMerchants(newOffset, newOffset + limit);
  };

  useEffect(() => {
    updateVisibleMerchants(offset, limit);
  }, [count]);

  return (
    <div>
      {Boolean(merchants.length) && (
        <Fragment>
          {merchants.map((merchant) =>
            <Merchant
              key={merchant.id}
              item={merchant}
              delete={deleteMerchant}
            />
          )}
          <PaginationWrapper>
            <Pagination
              previousLabel={LABELS.prev}
              nextLabel={LABELS.next}
              breakLabel={LABELS.break}
              pageCount={pageCount}
              marginPagesDisplayed={MARGIN_PAGES_DISPLAYED}
              pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
              onPageChange={handlePageClick}
              containerClassName={PAGINATION_CLASS_NAMES.container}
              pageClassName={PAGINATION_CLASS_NAMES.item}
              pageLinkClassName={PAGINATION_CLASS_NAMES.itemLink}
              previousClassName={PAGINATION_CLASS_NAMES.item}
              previousLinkClassName={PAGINATION_CLASS_NAMES.itemLink}
              nextClassName={PAGINATION_CLASS_NAMES.item}
              nextLinkClassName={PAGINATION_CLASS_NAMES.itemLink}
              breakClassName={PAGINATION_CLASS_NAMES.item}
              breakLinkClassName={PAGINATION_CLASS_NAMES.itemLink}
              activeClassName={PAGINATION_CLASS_NAMES.activeItem}
              activeLinkClassName={PAGINATION_CLASS_NAMES.activeItemLink}/>
          </PaginationWrapper>
        </Fragment>
      )}
    </div>
  );
};

MerchantList.propTypes = {
  merchants: PropTypes.array,
  count: PropTypes.number.isRequired,
  deleteMerchant: PropTypes.func.isRequired,
  updateVisibleMerchants: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired
};

MerchantList.defaultProps = {
  merchants: [],
  limit: DEFAULT_LIMIT
};

export default MerchantList;
