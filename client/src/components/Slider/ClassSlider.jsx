import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

const getPercentage = (current, max) => (100 * current) / max;
const getValue = (min, max, percentage) => {
  const range = max - min;
  const percentOfRange = range * (percentage / 100);
  return percentOfRange - min;
};
export default class ClassSlider extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props, { max, min, initialValue }) {
    super(props);

    const { value } = props;
    this.sliderRef = createRef();

    this.state = {
      value: null,
      diff: null,
      styleForground: { width: initialValue.toString() + '%' },
      styleBackground: { width: (100 - initialValue).toString() + '%' }
    };
  }

  handleMouseMove(e) {
    let newX = e.clientX - this.diff - this.sliderRef.current.getBoundingClientRect().left;

    const end = this.sliderRef.current.offsetWidth;
    const start = 0;

    if (newX < start) {
      newX = 0;
    }
    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    this.setState({
      ...this.state,
      value: getValue(min, max, newPercentage),
      styleForground: {
        transition: 'all 0.5s ease-out',
        width: newPercentage.toString() + '%'
      },
      styleBackground: {
        transition: 'all 0.5s ease-out',
        width: (100 - newPercentage).toString() + '%'
      }
    });
  }

  handleMouseUp() {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  }
  handleMouseDown() {
    diff.current = e.clientX - sliderRef.current.getBoundingClientRect().left;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }
  render() {
    return (
      <div className="flex h-3 mx-2" ref={sliderRef} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} style={{ width: '5rem' }}>
        <div style={this.styleForground} className={`${color} h-3`}></div>
        <div style={this.styleBackground} className="bg-gray-900 h-3"></div>
      </div>
    );
  }
}
