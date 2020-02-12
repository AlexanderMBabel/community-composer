import React from 'react';
import { IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';
import { FaRegWindowMaximize } from 'react-icons/fa';

const SubMenuItem = ({ name }) => {
  return (
    <div className="flex items-center ">
      <div className="text-xs">
        <IoIosArrowForward />
      </div>
      <div className="text-xs ml-2">
        <FaRegWindowMaximize />
      </div>
      <div className="text-sm ml-1">{name}</div>
    </div>
  );
};

export default SubMenuItem;
