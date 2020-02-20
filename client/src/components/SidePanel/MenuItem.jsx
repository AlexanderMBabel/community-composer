import React from 'react';
import { connect } from 'react-redux';
import { selectedMenuItem } from '../../actions/selected';

const MenuItem = ({ itemName, icon, selected, setSelected, selectedMenuItem }) => {
  return (
    <div
      onClick={e => {
        setSelected(e.currentTarget.dataset.name);
        selectedMenuItem(e.currentTarget.dataset.name);
      }}
      data-name={itemName}
      className={`${itemName === selected && 'bg-blue-400'} flex py-1  items-center hover:bg-gray-100`}
    >
      <div className="ml-2 text-lg">{icon}</div>
      <div className="ml-2">
        <button className="md:text-xs xl:text-sm">{itemName}</button>
      </div>
    </div>
  );
};

export default connect(null, { selectedMenuItem })(MenuItem);
