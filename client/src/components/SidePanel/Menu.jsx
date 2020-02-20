import React, { useState } from 'react';
import { FaFileAudio, FaDrumSteelpan } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import { GiRoundKnob, GiSoundWaves, GiMusicalKeyboard } from 'react-icons/gi';
import MenuItem from './MenuItem';
const Menu = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <section className=" m-2 mt-0 mr-0 border-2  border-l-4 border-gray-100 rounded rounded-r-none rounded-b bg-gray-200 flex flex-col py-10">
        <div className="text-gray-400 text-sm m-1">Catagories</div>
        <div className="text-sm text-gray-900">
          <MenuItem selected={selected} setSelected={setSelected} itemName="Sounds" icon={<MdLibraryMusic />} />
          <MenuItem selected={selected} setSelected={setSelected} itemName="Drums" icon={<FaDrumSteelpan />} />
          <MenuItem selected={selected} setSelected={setSelected} itemName="Instruments" icon={<GiRoundKnob />} />
          <MenuItem selected={selected} setSelected={setSelected} itemName="Audio Effects" icon={<GiSoundWaves />} />
          <MenuItem selected={selected} setSelected={setSelected} itemName="Midi Effects" icon={<GiMusicalKeyboard />} />
          <MenuItem selected={selected} setSelected={setSelected} itemName="Samples" icon={<FaFileAudio />} />
        </div>
      </section>
    </div>
  );
};

export default Menu;
