import React from 'react';
import { FaFileAudio, FaDrumSteelpan } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import { GiRoundKnob, GiSoundWaves, GiMusicalKeyboard } from 'react-icons/gi';
import MenuItem from './MenuItem';
const Menu = () => {
  return (
    <div>
      <section className=" m-2 mt-0 mr-0 border-2  border-l-4 border-gray-100 rounded rounded-r-none rounded-b bg-gray-200 flex flex-col py-10">
        <div className="text-gray-400 text-sm m-1">Catagories</div>
        <div className="text-sm text-gray-900">
          <MenuItem name="Sounds" icon={<MdLibraryMusic />} />
          <MenuItem name="Drums" icon={<FaDrumSteelpan />} />
          <MenuItem name="Instruments" icon={<GiRoundKnob />} />
          <MenuItem name="Audio Effects" icon={<GiSoundWaves />} />
          <MenuItem name="Midi Effects" icon={<GiMusicalKeyboard />} />
          <MenuItem name="Samples" icon={<FaFileAudio />} />
        </div>
      </section>
    </div>
  );
};

export default Menu;
