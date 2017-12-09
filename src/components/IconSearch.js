import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'feather-icons';
import { space } from 'styled-system';

import withSystem from '../utils/with-system';
import search from '../utils/search';
import SearchInput from './SearchInput';
import IconGrid from './IconGrid';
import Text from './Text';

class IconSearch extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    inputValue: '',
  };

  handleInputChange = event =>
    this.setState({ inputValue: event.target.value });

  render() {
    const results = getResults(this.state.inputValue);

    return (
      <div className={this.props.className}>
        <SearchInput
          placeholder="Search icons"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          mb={5}
        />
        {results.length !== 0 ? (
          <IconGrid icons={results.map(result => result.name)} />
        ) : (
          <Text>
            No results found for &ldquo;{this.state.inputValue}&rdquo;
          </Text>
        )}
      </div>
    );
  }
}

function getResults(value = '') {
  const iconsArray = Object.keys(icons).map(name => icons[name]);
  return search(iconsArray, value, { keys: ['name', 'tags'] });
}

export default withSystem(IconSearch, [space]);
