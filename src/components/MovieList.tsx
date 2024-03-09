import React, { useEffect, useMemo } from 'react';

import { AppState, MovieItemInfo } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { MovieListContainer } from '../styles/MovieList.style';
import InfiniteScroll from 'react-infinite-scroll-component';
import { updateSearchTerms } from '../redux/actions/searchActions';
import { MovieCard } from './MovieCard';
import { filterMoviesByYear } from '../utils/filterMoviesByYear';
import Skeleton from 'react-loading-skeleton';
import { isDefaultRange, stringIsNotNullOrWhiteSpace } from '../utils/utils';

interface MovieListProps {
    handleMovieSelect: (selectedItem: MovieItemInfo) => void;
}

export const MovieList: React.FC<MovieListProps> = ({ handleMovieSelect }) => {
    const { movieList, isLoading, error, totalResult, response, canLoadMore } =
        useSelector((state: AppState) => state.movieListState);
    const searchTerms = useSelector((state: AppState) => state.searchTerms);
    const { yearRange, page, title } = searchTerms;

    const dispatch = useDispatch();

    const filteredMovieList = useMemo(() => {
        return movieList.filter((movie) =>
            filterMoviesByYear(movie, yearRange),
        );
    }, [movieList, yearRange]);

    const loadNextPage = () => {
        const nextPage = (searchTerms?.page ?? 1) + 1;
        dispatch(updateSearchTerms({ ...searchTerms, page: nextPage }));
    };

    const noYearRangeFilter: boolean = useMemo(() => {
        return isDefaultRange(yearRange);
    }, [yearRange]);

    if (isLoading)
        return (
            <div className="movie-list border-right message">Loading...</div>
        );

    if (error)
        return (
            <div className="movie-list border-right message">
                Error: {error}
            </div>
        );

    if (movieList.length === 0 && filteredMovieList.length === 0)
        return (
            <div className="movie-list border-right message">
                No movies found.
            </div>
        );

    return (
        <MovieListContainer className="movie-list  border-right">
            <InfiniteScroll
                dataLength={filteredMovieList.length}
                next={loadNextPage}
                hasMore={canLoadMore ?? false}
                loader={
                    <h4 style={{ textAlign: 'center' }}>
                        <Skeleton count={10} height={145} />
                    </h4>
                }
                height={'calc(100vh - 120px)'}
                endMessage={
                    <p
                        className="reach-end-hint"
                        style={{ textAlign: 'center' }}
                    >
                        <b>This is the end of the list.</b>
                    </p>
                }
            >
                <div className="results-count">
                    {noYearRangeFilter
                        ? totalResult ?? 0
                        : filteredMovieList.length}
                    RESULTS
                </div>

                {filteredMovieList.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        onSelect={handleMovieSelect}
                    />
                ))}

                {canLoadMore && stringIsNotNullOrWhiteSpace(title) && (
                    <button className="load-more-btn" onClick={loadNextPage}>
                        Click to Load More Movies
                    </button>
                )}
            </InfiniteScroll>
        </MovieListContainer>
    );
};
