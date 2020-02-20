import React, { useState } from 'react';

// icons
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import Menu from './Menu';

import Search from './Search';
import SubMenu from './SubMenu';

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`theme-bg-gray  ${isOpen ? 'w-1/5' : 'w-12'} `}>
      <div id="collapse-search" className="flex items-center flex-wrap ">
        <div id="icon" className="text-gray-100 w-1/6">
          {isOpen ? (
            <div className=" text-3xl rounded-full w-1/2 ml-4 bg-gray-500 hover:bg-yellow-700" onClick={() => setIsOpen(false)}>
              <IoMdArrowDropleft />
            </div>
          ) : (
            <div className=" text-3xl rounded-full w-1/2 ml-4 bg-gray-500 hover:bg-yellow-700" onClick={() => setIsOpen(true)}>
              <IoMdArrowDropright />
            </div>
          )}
        </div>
        <div className={`${isOpen ? 'w-5/6' : 'hidden'}`}>
          <Search />
        </div>
      </div>
      <div className={`flex ${isOpen ? 'w-full' : 'hidden'}`}>
        <div className="w-5/6 ">
          <Menu />
        </div>
        <SubMenu />
      </div>
    </div>
  );
};

export default SidePanel;
