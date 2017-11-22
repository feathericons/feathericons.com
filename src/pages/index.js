import React from 'react';
import Link from 'gatsby-link';
import { icons } from 'feather-icons';

function IndexPage() {
  return (
    <div>
      {Object.keys(icons).map(name => (
        <div>
          <Link to={`icon/${name}`}>{name}</Link>
        </div>
      ))}
    </div>
  );
}

export default IndexPage;
