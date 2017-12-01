import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  space,
  width,
  fontSize,
  color,
  borderWidth,
  borderColor,
} from 'styled-system';

import withSystem from '../utils/with-system';
import lineHeight from '../utils/line-height';
import Icon from './Icon';

const Label = styled.label`
  position: relative;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding-left: 56px;
  font-family: inherit;
  background-color: transparent;
  appearance: none;
  outline: 0;
  border: none;
  ${space} ${fontSize} ${lineHeight} ${color};
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  box-sizing: content-box;
  transform: translateY(-50%);
`;

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function SearchBox({ className, ...props }) {
  return (
    <Label className={className}>
      <InputIcon name="search" px={4} color="gray.6" />
      <Input
        {...props}
        type="search"
        pr={4}
        py={4}
        fontSize={2}
        lineHeight="none"
        color="gray.7"
      />
    </Label>
  );
}

SearchBox.propTypes = propTypes;
SearchBox.defaultProps = defaultProps;

export default withSystem(SearchBox, [space, width, borderWidth, borderColor]);
