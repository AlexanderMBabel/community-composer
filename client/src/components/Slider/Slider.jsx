import React, { useState, useRef } from 'react';

const getValue = (min, max, percentage) => {
  const range = max - min;
  const percentOfRange = range * (percentage / 100);
  return percentOfRange + min;
};

const Slider = ({ max, min, color, initialValue, name, sliderValues, setSliderValues, setChanged }) => {
  const sliderRef = useRef();
  const diff = useRef(null);
  const [value, setValue] = useState(null);

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
    setValue(getValue(min, max, newPercentage));

    setStyleForground({
      transition: 'all 0.2s ease',
      width: newPercentage.toString() + '%'
    });
    setStyleBackground({
      transition: 'all 0.2s ease',
      width: (100 - newPercentage).toString() + '%'
    });
    setSliderValues({ ...sliderValues, [name]: getValue(min, max, newPercentage) });
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
    setChanged(name);
  };

  return (
    <div>
      <div className="text-xs">{name}</div>
      <div style={{ width: '85px' }} className="flex h-2 mx-2 my-1 " ref={sliderRef} onMouseDown={handleMouseDown} onClick={handleClick}>
        <div style={styleForground} className={`${color} h-2`}></div>
        <div style={styleBackground} className="bg-gray-900 h-2"></div>
      </div>
    </div>
  );
};

export default Slider;
