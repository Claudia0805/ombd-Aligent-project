import React from 'react';

import MovieItem from './components/MovieItem';
import { MovieList } from './components/MovieList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { AppState, MovieItemInfo } from './types/type';

import './styles/common.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { stringIsNotNullOrWhiteSpace } from './utils/utils';
import { setSelectedMovieId } from './redux/actions/selectedMovieActions';

const App = () => {
    const title = useSelector((s: AppState) => s.searchTerms.title);
    const selectedMovieId = useSelector((s: AppState) => s.selectedMovieId);

    const dispatch = useDispatch();

    const handleMovieSelect = (movie: MovieItemInfo) => {
        dispatch(setSelectedMovieId(movie.imdbID));
    };

    return (
        <div className="home-page">
            <div className="header">
                <SearchBar />
            </div>

            {stringIsNotNullOrWhiteSpace(title) ? (
                <div className="content">
                    <MovieList handleMovieSelect={handleMovieSelect} />
                    {selectedMovieId && <MovieItem imdbID={selectedMovieId} />}
                </div>
            ) : (
                <div className="content message">
                    Explore your movie journey by searching with a title.
                </div>
            )}
        </div>
    );
};

export default App;
