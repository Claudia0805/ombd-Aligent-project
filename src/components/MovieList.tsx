import React, { useMemo } from 'react';

import { AppState, MovieItemInfo } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { MovieListContainer } from '../styles/MovieList.style';
import InfiniteScroll from 'react-infinite-scroll-component';
import { updateSearchTerms } from '../redux/actions/searchActions';
import { MovieCard } from './MovieCard';
import { filterMoviesByYear } from '../utils/filterMoviesByYear';
import Skeleton from 'react-loading-skeleton';
import { Console } from 'console';
import { stringIsNotNullOrWhiteSpace } from '../utils/utils';

interface MovieListProps {
    handleMovieSelect: (selectedItem: MovieItemInfo) => void;
}

export const MovieList: React.FC<MovieListProps> = ({ handleMovieSelect }) => {
    const movieListState = useSelector(
        (state: AppState) => state.movieListState,
    );

    const movieList = useSelector((s: AppState) => s.movieListState?.movieList);
    const isFetching = useSelector((s: AppState) => s.isFetching);
    const error = useSelector((s: AppState) => s.error);

    const { yearRange, page, title } = useSelector(
        (s: AppState) => s.searchTerms,
    );

    const filteredMovieList = useMemo(() => {
        return (movieList ?? []).filter((movie) =>
            filterMoviesByYear(movie, yearRange),
        );
    }, [movieList, yearRange]);

    const dispatch = useDispatch();
    const searchTerms = useSelector((state: AppState) => state.searchTerms);

    const canLoadMore = useMemo(() => {
        if (movieListState?.totalResult != null) {
            if (
                movieListState.response != null &&
                movieListState.response === 'True' &&
                (movieList ?? []).length < movieListState.totalResult
            ) {
                return true;
            }
        } else if (
            page != null &&
            page > 1 &&
            movieListState?.response === 'False'
        ) {
            return false;
        }
        return false;
    }, [movieList, movieListState, page]);

    const loadNextPage = () => {
        const nextPage = (searchTerms?.page ?? 1) + 1;
        dispatch(updateSearchTerms({ ...searchTerms, page: nextPage }));
    };

    if (isFetching)
        return <div className="movie-list  border-right">Loading...</div>;

    if (error)
        return (
            <div className="movie-list border-right message">
                Error: {error}
            </div>
        );

    if (!filteredMovieList.length)
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
                hasMore={canLoadMore}
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
                    {filteredMovieList.length} RESULTS
                    {canLoadMore && <div>Scroll to find more movies.</div>}
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
