import React, { useState, useRef } from 'react';
import { oscillatorOptions } from '../../utils/selectOptions';
import numberToNote from '../../utils/numberToNote';

const getValue = (min, max, percentage) => {
  const range = max - min;
  const percentOfRange = range * (percentage / 100);
  return percentOfRange + min;
};

const getOption = (percentage, oscOptions) => {
  const numOfOptions = oscOptions.length;
  const steps = 100 / numOfOptions;

  return oscOptions[Math.floor(percentage / steps)].value;
};

const SliderOptions = ({ setChanged, max, min, color, initialValue, name, sliderValues, setSliderValues }) => {
  const sliderRef = useRef();
  const diff = useRef(null);
  const [value, setValue] = useState('sine');

  const [styleForground, setStyleForground] = useState({ width: initialValue.toString() + '%' });
  const [styleBackground, setStyleBackground] = useState({ width: (100 - initialValue).toString() + '%' });

  const getPercentage = (current, max) => (100 * current) / max;

  const handleMouseMove = e => {
    let newX = e.clientX - diff.current - sliderRef.current.getBoundingClientRect().left;

    const end = sliderRef.current.offsetWidth;
    const start = 0;

    if (newX < start) {
      newX = 0;
    }
    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    setValue(getOption(newPercentage, oscillatorOptions));

    setStyleForground({
      transition: 'all 0.2s ease',
      width: newPercentage.toString() + '%'
    });
    setStyleBackground({
      transition: 'all 0.2s ease',
      width: (100 - newPercentage).toString() + '%'
    });
    setSliderValues({ ...sliderValues, [name]: getOption(newPercentage, oscillatorOptions) });
    setChanged(name);
  };

  const handleMouseUp = e => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };
  const handleMouseDown = e => {
    diff.current = e.clientX - sliderRef.current.getBoundingClientRect().left;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  const handleClick = e => {
    const clickedPosition = e.clientX - sliderRef.current.getBoundingClientRect().left;
    const end = sliderRef.current.offsetWidth;
    const newPercentage = getPercentage(clickedPosition, end);
    setStyleForground({
      transition: 'all 0.2s ease',
      width: newPercentage.toString() + '%'
    });
    setStyleBackground({
      transition: 'all 0.2s ease',
      width: (100 - newPercentage).toString() + '%'
    });
    setSliderValues({ ...sliderValues, [name]: getValue(min, max, newPercentage) });
    setValue(getOption(newPercentage, oscillatorOptions));
    setSliderValues({ ...sliderValues, [name]: getOption(newPercentage, oscillatorOptions) });

    setChanged(name);
  };

  return (
    <div>
      <div className="text-xs">{name}</div>

      <div style={{ width: '85px' }} className="flex h-4 mx-2 my-1 relative " ref={sliderRef} onMouseDown={handleMouseDown} onClick={handleClick}>
        <div style={styleForground} className={`${color} h-4`}></div>
        <div style={styleBackground} className="bg-gray-900 h-4"></div>
        <div style={{ width: '85px' }} className="flex flex-wrap absolute top-0 z-10">
          {oscillatorOptions.map(osc => (
            <div className="w-1/5 text-white " style={{ fontSize: '7px', userSelect: 'none' }}>
              {osc.label.slice(0, 3)}
            </div>
          ))}
        </div>
        <div className="flex text-sm text-center absolute" style={{ top: 6, left: 20 }}>
          {value.value}
        </div>
      </div>
    </div>
  );
};

export default SliderOptions;
