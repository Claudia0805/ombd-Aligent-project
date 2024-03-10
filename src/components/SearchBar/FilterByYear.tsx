import { Slider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateSearchRange } from '../../redux/actions/searchActions';
import { AppState } from '../../types/type';
import useDebounce from '../../hooks/useDebounce';
import { DEFAULT_YEAR_RANGE } from '../../constants/constants';

export const FilterByYear = () => {
    const YEAR_END = new Date().getFullYear();
    const [range, setRange] = useState<[number, number]>([
        DEFAULT_YEAR_RANGE.startYear,
        DEFAULT_YEAR_RANGE.endYear,
    ]);

    const searchTerms = useSelector((s: AppState) => s.searchTerms);

    useEffect(() => {
        const yearRange = searchTerms?.yearRange;
        if (yearRange != null) {
            setRange([yearRange.startYear, yearRange.endYear ?? YEAR_END]);
        }
    }, [YEAR_END, searchTerms]);

    const dispatch = useDispatch();

    const debouncedYearRange = useDebounce(range, 500);

    useEffect(() => {
        // Only dispatch action if debouncedYearRange is different from the current searchTerms yearRange
        // This prevents unnecessary updates
        if (
            debouncedYearRange[0] !== searchTerms.yearRange?.startYear ||
            debouncedYearRange[1] !== searchTerms.yearRange?.endYear
        ) {
            dispatch(
                updateSearchRange({
                    ...searchTerms,
                    yearRange: {
                        startYear: debouncedYearRange[0],
                        endYear: debouncedYearRange[1],
                    },
                }),
            );
        }
    }, [debouncedYearRange, dispatch, searchTerms]);

    const handleYearChange = (_: Event, newValue: number | Array<number>) => {
        if (Array.isArray(newValue) && newValue.length === 2) {
            const startYear = newValue[0];
            const endYear = newValue[1];
            setRange([startYear, endYear]);
        }
    };

    return (
        <div className="search-year-container">
            <div className="search-year-label">YEAR</div>
            <div className="search-year-slider">
                <span className="search-year-mark-left">1888</span>
                <Slider
                    name="year"
                    value={range}
                    defaultValue={range}
                    min={1888}
                    max={YEAR_END}
                    valueLabelDisplay="auto"
                    onChange={handleYearChange}
                    getAriaLabel={(index) => (index === 0 ? 'Start' : 'End')}
                />
                <span className="search-year-mark-right">{YEAR_END}</span>
            </div>
        </div>
    );
};
