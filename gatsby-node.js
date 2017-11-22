const path = require('path');
const { icons } = require('feather-icons');

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const iconTemplate = path.resolve('./src/templates/icon.js');

  Object.keys(icons).forEach(name =>
    createPage({
      path: `icon/${name}`,
      component: iconTemplate,
      context: { name },
    })
  );
};
