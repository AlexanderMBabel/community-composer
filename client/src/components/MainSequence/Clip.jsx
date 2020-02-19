import React from 'react';
import { connect } from 'react-redux';
import { selectedClip } from '../../actions/selected';

const Clip = ({ clip, selectedClip, updated }) => {
  return (
    <div onClick={() => selectedClip(clip)} className={` ${clip.color} w-40 h-full  border-l-1 border-r-1 shadow-inner text-sm`}>
      {clip.name}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedUpdated: state.universalReducer.updated
});

export default connect(mapStateToProps, { selectedClip })(Clip);
