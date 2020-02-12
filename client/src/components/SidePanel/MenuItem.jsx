import React from 'react';

const MenuItem = ({ name, icon }) => {
  return (
    <div className="flex py-1  items-center hover:bg-gray-100">
      <div className="ml-2 text-lg">{icon}</div>
      <div className="ml-2">
        <button>{name}</button>
      </div>
    </div>
  );
};

export default MenuItem;
