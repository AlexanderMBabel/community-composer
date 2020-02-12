import React from 'react';

const Search = () => {
  return (
    <div className="  text-gray-900 w-full  ">
      <input
        className="bg-gray-200 border-2 border-b-0 border-gray-100 rounded rounded-b-none p-1 text-gray-900 placeholder-gray-900"
        style={{ width: '100%' }}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
