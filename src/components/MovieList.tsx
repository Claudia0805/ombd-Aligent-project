import React, { useCallback, useEffect, useMemo } from 'react';

import { AppState, MovieItemInfo } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { MovieListContainer } from '../styles/MovieList.style';
import InfiniteScroll from 'react-infinite-scroll-component';
import { updateSearchTerms } from '../redux/actions/searchActions';
import { MovieCard } from './MovieCard';
import Skeleton from 'react-loading-skeleton';
import { isDefaultRange } from '../utils/utils';
import { setSelectedMovieId } from '../redux/actions/selectedMovieActions';

interface MovieListProps {
    handleMovieSelect: (selectedItem: MovieItemInfo) => void;
}

export const MovieList: React.FC<MovieListProps> = ({ handleMovieSelect }) => {
    const { movieList, filteredMovieList, error, totalResult, canLoadMore } =
        useSelector((state: AppState) => state.movieListState);
    const searchTerms = useSelector((state: AppState) => state.searchTerms);
    const isLoadingPage = useSelector((state: AppState) => state.isLoadingPage);
    const selectedMovieId = useSelector(
        (state: AppState) => state.selectedMovieId,
    );
    const dispatch = useDispatch();

    // If user didn't select any movie to show detail, display the first movie in the list at the beginning
    useEffect(() => {
        if (!selectedMovieId && filteredMovieList?.length > 0) {
            dispatch(setSelectedMovieId(filteredMovieList[0].imdbID));
        }
    }, [dispatch, filteredMovieList, selectedMovieId]);

    const loadNextPage = useCallback(() => {
        const nextPage = (searchTerms?.page ?? 1) + 1;
        dispatch(updateSearchTerms({ ...searchTerms, page: nextPage }));
    }, [dispatch, searchTerms]);

    useEffect(() => {
        // If canLoadMore && movieList.length < 5
        // keep fetching next page, until infinite scroll is enabled
        if (
            canLoadMore &&
            isLoadingPage === false &&
            filteredMovieList.length < 5
        ) {
            loadNextPage();
        }
    }, [canLoadMore, isLoadingPage, filteredMovieList.length, loadNextPage]);

    const isWithDefaultRange: boolean = useMemo(() => {
        return isDefaultRange(searchTerms.yearRange);
    }, [searchTerms.yearRange]);

    if (isLoadingPage && searchTerms.page === 1)
        return (
            <div className="movie-list border-right message">Loading...</div>
        );

    if (error) {
        if (error !== 'Movie not found!') {
            return (
                <div className="movie-list border-right message">
                    Error: {error}
                </div>
            );
        } else {
            if (filteredMovieList.length === 0) {
                return (
                    <div className="movie-list border-right message">
                        {error}
                    </div>
                );
            }
        }
    }

    if (filteredMovieList.length === 0 && !canLoadMore)
        return (
            <div className="movie-list border-right message">
                No movies found.
            </div>
        );

    return (
        <MovieListContainer className="movie-list  border-right">
            <InfiniteScroll
                dataLength={movieList.length}
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
                    <span className="count">
                        {isWithDefaultRange
                            ? totalResult ?? filteredMovieList.length
                            : filteredMovieList.length}
                    </span>
                    <span> {isWithDefaultRange === false ? '+ ' : ''}</span>
                    RESULTS
                </div>

                {filteredMovieList.map((movie, index) => (
                    <MovieCard
                        key={`${movie.imdbID}-${index}`}
                        movie={movie}
                        onSelect={handleMovieSelect}
                    />
                ))}

                {isLoadingPage && (
                    <div className="movie-list border-right message">
                        Loading...
                    </div>
                )}
            </InfiniteScroll>
        </MovieListContainer>
    );
};
