import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router';
import { space } from 'styled-system';
import { icons } from 'feather-icons';

import withSystem from '../utils/with-system';
import search from '../utils/search';
import Search from './Search';
import IconTile from './IconTile';

class IconSearch extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  handleChange = selectedItem => {
    const path = selectedItem ? `/icon/${itemToString(selectedItem)}` : '/';
    this.props.history.push(path);
  };

  render() {
    const { className, location } = this.props;

    const match = matchPath(location.pathname, {
      path: '/icon/:name',
    });

    const selectedItem =
      match && match.params ? icons[match.params.name] : null;

    return (
      <Search
        className={className}
        placeholder="Search icons"
        selectedItem={selectedItem}
        onChange={this.handleChange}
        getItems={getItems}
        itemToString={itemToString}
        renderItem={({ getItemProps, item, isHighlighted }) => (
          <IconTile
            {...getItemProps({
              item,
              name: item.name,
              p: 4,
              bg: isHighlighted ? 'gray.0' : 'white',
            })}
          />
        )}
      />
    );
  }
}

function getItems(value = '') {
  const items = Object.keys(icons).map(name => icons[name]);
  return search(items, value, { keys: ['name', 'tags'] });
}

function itemToString(item) {
  return item ? item.name : '';
}

export default withSystem(withRouter(IconSearch), [space]);
