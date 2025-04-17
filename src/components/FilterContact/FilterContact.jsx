import React from 'react';

import { UniversalInput } from 'components';

import { FilterWraper } from './FilterContact.styled';

export default function FilterContact({ filter, onFilterChange }) {
  return (
    <FilterWraper>
      <UniversalInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        label="Find contacts by name"
      />
    </FilterWraper>
  );
}
