import React from 'react';
import { IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';
import { FaRegWindowMaximize } from 'react-icons/fa';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import Sampler from '../instruments/Sampler';
import SubMenuItem from './SubMenuItem';

const dummyMenuItems = ['Sampler', 'FMSynth', 'PolySynth', 'Massivish', 'DuoSynth', 'Pluck', 'Simple', 'Twin', 'Stepper', 'Generated'];

const SubMenu = () => {
  return (
    <div className="w-full">
      <section className="bg-gray-600 border-gray-100 border-2 border-l-0 rounded rounded-l-none rounded-t-none">
        <div className="flex bg-gray-600 justify-between  ">
          <div className="text-sm">Name</div>
          <div className="mr-10">
            <IoIosArrowUp />
          </div>
        </div>
        <Scrollbars autoHeight>
          <div className="bg-gray-300"></div>
          {dummyMenuItems.map((item, iter) => (
            <div className={`${iter % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}>
              <SubMenuItem key={item} name={item} />
            </div>
          ))}
        </Scrollbars>
      </section>
    </div>
  );
};

export default SubMenu;
