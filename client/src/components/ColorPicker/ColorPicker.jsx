import React from 'react';

const colors = ['bg-blue-200', 'bg-pink-300', 'bg-orange-400', 'bg-teal-300', 'bg-red-200', 'bg-indigo-200', 'bg-yellow-300', 'bg-green-300', 'bg-blue-700'];

const ColorPicker = ({ setChoosenColor }) => {
  return (
    <div className="flex flex-wrap">
      {colors.map(color => (
        <div onClick={() => setChoosenColor(color)} className={`${color} rounded-full w-1/3 h-10`}></div>
      ))}
    </div>
  );
};

export default ColorPicker;
