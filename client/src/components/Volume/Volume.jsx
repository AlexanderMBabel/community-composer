import React, { useState, useRef } from 'react';

const Volume = ({ max, min, color, initialValue }) => {
  const sliderRef = useRef();
  const diff = useRef();
  const value = useRef();
  value.current = initialValue;

  const [styleForground, setStyleForground] = useState({ width: initialValue.toString() + '%' });
  const [styleBackground, setStyleBackground] = useState({ width: (100 - initialValue).toString() + '%' });

  const getPercentage = (current, max) => (100 * current) / max;

  const handleMouseMove = e => {
    let newX = e.clientX - diff.current - sliderRef.current.getBoundingClientRect().left;

    console.log(sliderRef.current.offsetWidth);
    const end = sliderRef.current.offsetWidth;
    const start = 0;

    if (newX < start) {
      newX = 0;
    }
    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    console.log(newPercentage);
    setStyleForground({
      transition: 'all 0.5s ease-out',
      width: newPercentage.toString() + '%'
    });
    setStyleBackground({
      transition: 'all 0.5s ease-out',
      width: (100 - newPercentage).toString() + '%'
    });
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

  return (
    <div className="flex h-3 mx-2" ref={sliderRef} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} style={{ width: '5rem' }}>
      <div style={styleForground} className={`${color} h-3`}></div>
      <div style={styleBackground} className="bg-gray-900 h-3"></div>
    </div>
  );
};

export default Volume;
