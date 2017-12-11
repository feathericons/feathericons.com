import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Relative } from 'rebass';

import Icon from './Icon';
import Input from './Input';

const propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
};

const InputIcon = styled(Icon)`
  box-sizing: content-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

function SearchInput({ value, placeholder, onChange, ...props }) {
  return (
    <Relative {...props}>
      <InputIcon name="search" px={4} color="gray6" />
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type="search"
        py={4}
        pr={4}
        pl="56px"
      />
    </Relative>
  );
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
