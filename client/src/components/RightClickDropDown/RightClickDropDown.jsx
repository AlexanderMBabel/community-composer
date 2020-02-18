import React from 'react';

const RightClickDropDown = ({ location }) => {
  const { x, y } = location;
  const windowH = window.innerHeight;
  const windowW = window.innerWidth;
  const left = windowW - x;
  const top = windowH - y;
  console.log(location);
  console.log('something');

  return (
    <div style={{ left: left, top: top }} className="absolute w-10 h-48">
      <div>add track</div>
      <div>remove track</div>
      <div>add clip</div>
      <div>remove clip</div>
    </div>
  );
};

export default RightClickDropDown;
