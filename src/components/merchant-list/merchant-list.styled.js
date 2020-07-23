import styled from 'styled-components';
import colors from '../../styles/colors';

export const PAGINATION_CLASS_NAMES = {
  container: 'pagination',
  item: 'pagination-item',
  itemLink: 'pagination-link',
  activeItem: 'pagination-item--active',
  activeItemLink: 'pagination-link--active',
};

export const PaginationWrapper = styled.div`
  .${PAGINATION_CLASS_NAMES.container} {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .${PAGINATION_CLASS_NAMES.item} {
    display: inline-block;
    float: left;
    text-decoration: none;
  }
  
  .${PAGINATION_CLASS_NAMES.itemLink} {
    cursor: pointer;
    display: inline-block;
    padding: 8px 16px;
  }
  
  .${PAGINATION_CLASS_NAMES.activeItem} {
    background: ${colors.main_background};
  }
  
  .${PAGINATION_CLASS_NAMES.activeItemLink} {
    color: ${colors.main_color};
  }
`;
