import React from 'react';
import Effect from './Effect';

const Effects = ({ section }) => {
  return (
    <div className="w-full">
      <p className="text-center">Effects</p>
      <div className="flex w-full flex-wrap container mx-auto justify-center">
        <div className="w-1/3 m-2">
          <Effect placement={1} section={section} />
        </div>
        <div className="w-1/3 m-2">
          <Effect placement={2} section={section} />
        </div>
      </div>
    </div>
  );
};

export default Effects;
