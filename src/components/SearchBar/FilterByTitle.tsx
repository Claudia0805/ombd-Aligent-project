import React, { useEffect, useState } from 'react';

import { AppState } from '../../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerms } from '../../redux/actions/searchActions';
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from '../../hooks/useDebounce';
import { stringIsNotNullOrWhiteSpace } from '../../utils/utils';
import { fetchMoviesSuccess } from '../../redux/actions/movieListActions';

export const FilterByTitle = () => {
    const searchTerms = useSelector((s: AppState) => s.searchTerms);

    const [title, setTitle] = useState<string>(searchTerms?.title ?? '');

    const dispatch = useDispatch();

    // Wait for 500ms after user stops typing
    const debouncedTitle = useDebounce(title, 500);

    useEffect(() => {
        if (stringIsNotNullOrWhiteSpace(debouncedTitle)) {
            dispatch(
                updateSearchTerms({
                    ...searchTerms,
                    title: debouncedTitle,
                    page: 1, // Reset the page number when searching a new title
                }),
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        // Only run the effect if debouncedTitle changes
    }, [debouncedTitle, dispatch]);

    useEffect(() => {
        if (!stringIsNotNullOrWhiteSpace(title)) {
            dispatch(
                fetchMoviesSuccess({ movieList: [], filteredMovieList: [] }),
            );
        }
    }, [debouncedTitle, dispatch, title]);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <div className="search-title-container">
            <SearchIcon className="search-icon" />
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search movies here"
                onChange={handleTitleChange}
                value={title}
            />
        </div>
    );
};
