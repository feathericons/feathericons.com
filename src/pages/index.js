import React from 'react';
import Link from 'gatsby-link';
import { icons } from 'feather-icons';

import Icon from '../components/Icon';

function IndexPage() {
  return (
    <div>
      {Object.keys(icons).map(name => (
        <div>
          <Link to={`icon/${name}`}>
            <Icon name={name} />
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default IndexPage;
