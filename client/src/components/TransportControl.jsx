import React from 'react';

import { MdPlayArrow, MdStop } from 'react-icons/md';

const TransportControl = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center">
      <div className="p-3 bg-gray-300 m-2 rounded-r-sm">
        <MdPlayArrow />
      </div>
      <div className="p-3 bg-gray-300 m-2 rounded-sm">
        <MdStop />
      </div>
    </div>
  );
};

export default TransportControl;
