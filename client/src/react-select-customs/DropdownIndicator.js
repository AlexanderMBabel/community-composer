import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { components } from 'react-select';

const DropDownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <IoMdArrowDropdown />
    </components.DropdownIndicator>
  );
};

export default DropDownIndicator;
