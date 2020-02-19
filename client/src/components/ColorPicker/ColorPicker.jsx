import React, { useState } from 'react';

const colors = [
  'bg-blue-300',
  'bg-pink-300',
  'bg-orange-300',
  'bg-teal-300',
  'bg-red-300',
  'bg-indigo-200',
  'bg-yellow-300',
  'bg-green-300',
  'bg-blue-600',
  'bg-red-600',
  'bg-yellow-600',
  'bg-pink-600'
];

const ColorPicker = ({ setColor }) => {
  const [choosenColor, setChoosenColor] = useState('bg-blue-300');

  return (
    <div className="flex flex-wrap p-5">
      {colors.map(color => (
        <div
          key={color}
          onClick={() => {
            setChoosenColor(color);
            setColor(color);
          }}
          className={`${color} ${color === choosenColor && 'border-4 border-gray-700'} color-blob w-1/5 h-5 m-1`}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
