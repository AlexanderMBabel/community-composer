import React from 'react';

const TrackInfo = ({ trackInfo }) => {
  const { name, type, instrument, effects, color, output, input } = trackInfo;
  return (
    <div>
      <div className="w-1/5 bg-gray-500 text-xs border-2 border-gray-100">
        <p className={color}>{name}</p>
        <p></p>
        <p>{instrument}</p>
        <p className="text-xs">io</p>
        <p lass></p>
      </div>
    </div>
  );
};

export default TrackInfo;
