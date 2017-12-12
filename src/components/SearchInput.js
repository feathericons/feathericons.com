import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { Absolute, Flex, Relative } from 'rebass';

import { colors } from '../theme';
import Icon from './Icon';
import Input from './Input';

const propTypes = {
  value: string,
  placeholder: string,
  onChange: func,
};

const defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
};

const Fill = styled(Flex)`
  width: 100%;
  height: 100%;
`;

function SearchInput({ value, placeholder, onChange, ...props }) {
  return (
    <Relative {...props}>
      <Absolute top bottom left>
        <Fill align="center" px={4}>
          <Icon name="search" color={colors.gray6} />
        </Fill>
      </Absolute>
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
