import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, width } from 'styled-system';

import withSystem from '../utils/with-system';
import Icon from './Icon';
import Input from './Input';

const Relative = styled.div`
  position: relative;
`;

const InputIcon = styled(Icon)`
  box-sizing: content-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function SearchInput({ className, ...props }) {
  return (
    <Relative className={className}>
      <InputIcon name="search" px={4} color="gray.5" />
      <Input {...props} pl="56px" />
    </Relative>
  );
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default withSystem(SearchInput, [space, width]);
