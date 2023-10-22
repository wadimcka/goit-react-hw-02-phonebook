import React from 'react';

function Filter({ filter, onChange }) {
  return (
    <>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" value={filter} onChange={onChange} />
    </>
  );
}

export default Filter;
