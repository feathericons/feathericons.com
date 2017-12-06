import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { Box } from 'grid-styled';
import { space, color, borderRadius, boxShadow } from 'styled-system';

import withSystem from '../utils/with-system';
import search from '../utils/search';
import Text from './Text';
import IconTile from './IconTile';
import SearchInput from './SearchInput';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Results = styled.div`
  position: absolute;
  top: 63px;
  width: 100%;
  ${color} ${boxShadow} ${borderRadius};
`;

function Search({ className, items, keys }) {
  return (
    <Downshift
      render={({ getInputProps, getItemProps, isOpen, inputValue }) => {
        const results = search(items, inputValue, { keys });
        return (
          <div className={className} style={{ position: 'relative' }}>
            <SearchInput {...getInputProps({ placeholder: 'Search icons' })} />
            {isOpen && inputValue ? (
              <Results bg="white" boxShadow="small" borderRadius={1}>
                {results.length > 0 ? (
                  results.splice(0, 10).map(item => (
                    <IconTile
                      key={item.name}
                      {...getItemProps({
                        item: item.name,
                        name: item.name,
                        p: 4,
                      })}
                    />
                  ))
                ) : (
                  <Box p={4}>
                    <Text fontSize={1} color="gray.6">
                      No results found for &ldquo;{inputValue}&rdquo;
                    </Text>
                  </Box>
                )}
              </Results>
            ) : null}
          </div>
        );
      }}
    />
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default withSystem(Search, [space]);
