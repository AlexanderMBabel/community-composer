import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaSlidersH } from 'react-icons/fa';

const EffectContainer = ({ effectData }) => {
  const { name, effect, settings } = effectData;
  const [display, setDisplay] = useState('default');

  const minimize = () => {
    if (display === 'default' || display === 'sliders') {
      setDisplay('min');
    } else {
      setDisplay('default');
    }
  };

  const sliders = () => {
    display === 'sliders' ? setDisplay('default') : setDisplay('sliders');
  };
  return (
    <div className="w-full h-56 bg-gray-700 shadow-inner border-gray-900 rounded">
      <div id="top_bar" className="h-10 bg-gray-100 w-full flex justify-end items-center">
        <div className="text-sm">{name}</div>
        <div className="flex ">
          <div className={`${display === 'sliders' ? 'text-blue-600' : 'text-black'} mx-2`} onClick={sliders}>
            <FaSlidersH />
          </div>
          <div className="mx-2 w" onClick={minimize}>
            {display === 'default' || display === 'sliders' ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectContainer;
