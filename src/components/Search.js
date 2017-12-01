import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { Box } from 'grid-styled';
import { space, borderRadius, boxShadow } from 'styled-system';

import withSystem from '../utils/with-system';
import search from '../utils/search';
import Text from './Text';
import IconTile from './IconTile';
import SearchBox from './SearchBox';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function Search({ className, items, keys }) {
  return (
    <Downshift
      render={({ getInputProps, getItemProps, isOpen, inputValue }) => {
        const results = search({ keys }, items, inputValue);
        return (
          <div className={className}>
            <SearchBox {...getInputProps({ placeholder: 'Search icons' })} />
            {isOpen && inputValue ? (
              <div>
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
                      No results found.
                    </Text>
                  </Box>
                )}
              </div>
            ) : null}
          </div>
        );
      }}
    />
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default withSystem(Search, [space, borderRadius, boxShadow], {
  borderRadius: 1,
  boxShadow: 1,
});
