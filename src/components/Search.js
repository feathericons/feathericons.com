import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import { Box } from 'grid-styled';
import { space, width, color, borderRadius, boxShadow } from 'styled-system';

import withSystem from '../utils/with-system';
import Relative from './Relative';
import Text from './Text';
import SearchInput from './SearchInput';

const propTypes = {
  getItems: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  className: '',
  placeholder: '',
};

const Results = withSystem(
  styled.div`
    position: absolute;
    top: calc(51px + 16px);
    max-height: 70vh;
    overflow: auto;
  `,
  [width, color, borderRadius, boxShadow],
  { width: 1, bg: 'white', borderRadius: 1, boxShadow: 'small' }
);

function Search({ className, placeholder, getItems, renderItem, ...props }) {
  return (
    <Downshift
      {...props}
      render={({
        getRootProps,
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex,
      }) => {
        const items = getItems(inputValue);
        return (
          <Relative {...getRootProps({ refKey: 'innerRef', className })}>
            <SearchInput {...getInputProps({ placeholder })} />
            {isOpen && inputValue ? (
              <Results>
                {items.length > 0 ? (
                  items.map((item, index) =>
                    renderItem({
                      getItemProps,
                      item,
                      isHighlighted: index === highlightedIndex,
                    })
                  )
                ) : (
                  <Box p={4}>
                    <Text fontSize={1} color="gray.6">
                      No results found for &ldquo;{inputValue}&rdquo;
                    </Text>
                  </Box>
                )}
              </Results>
            ) : null}
          </Relative>
        );
      }}
    />
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default withSystem(Search, [space, width]);
