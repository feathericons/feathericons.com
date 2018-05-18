import React from 'react';
import { icons } from 'feather-icons';

import search from '../utils/search';
import SearchInput from './SearchInput';
import IconGrid from './IconGrid';
import NoResults from './NoResults';

class IconSearch extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event =>
    this.setState({ inputValue: event.target.value });

  render() {
    const results = getResults(this.state.inputValue);

    return (
      <div>
        <SearchInput
          placeholder="Search icons"
          label="Search"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          mb={5}
        />
        {results.length !== 0 ? (
          <IconGrid icons={results} />
        ) : (
          <NoResults value={this.state.inputValue} />
        )}
      </div>
    );
  }
}

function getResults(value = '') {
  const list = Object.keys(icons).map(name => icons[name]);
  return search(list, value, { keys: ['name', 'tags'] });
}

export default IconSearch;
