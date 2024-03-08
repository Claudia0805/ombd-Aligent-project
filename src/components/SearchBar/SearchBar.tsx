import React from 'react';

import { FilterByTitle } from './FilterByTitle';
import { FilterByType } from './FilterByType';
import { FilterByYear } from './FilterByYear';
import { SearchBarContainer } from '../../styles/SearchBar.style';

export const SearchBar = () => {
    return (
        <SearchBarContainer className="search-bar">
            <FilterByTitle />
            <FilterByYear />
            <FilterByType />
        </SearchBarContainer>
    );
};
