import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateSearchTerms } from '../../redux/actions/searchActions';
import { AppState, MovieType } from '../../types/type';

export const FilterByType = () => {
    const movieTypeArray: string[] = Object.values(MovieType);
    const searchTerms = useSelector((s: AppState) => s.searchTerms);

    const dispatch = useDispatch();
    const handleTypeChange = (event: React.MouseEvent<HTMLLabelElement>) => {
        const target = event.target as HTMLInputElement;
        const type = target.value as MovieType;
        dispatch(
            updateSearchTerms({
                ...searchTerms,
                type,
                page: 1,
            }),
        );
    };

    return (
        <div className="search-type-container">
            <div className="search-type-label">TYPE</div>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue={MovieType.Any}
                >
                    {movieTypeArray.map((value) => (
                        <FormControlLabel
                            key={value}
                            value={value}
                            control={<Radio />}
                            label={value}
                            onClick={handleTypeChange}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};
