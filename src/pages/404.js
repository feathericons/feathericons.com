import React from 'react';
import Helmet from 'react-helmet';

function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found | Feather</title>
      </Helmet>
      <h1>Page Not Found</h1>
    </div>
  );
}

export default NotFoundPage;
