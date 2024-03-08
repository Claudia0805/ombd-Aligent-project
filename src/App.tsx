import React from 'react';

import MovieItem from './components/MovieItem';
import { MovieList } from './components/MovieList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { AppState, MovieItemInfo } from './types/type';

import './styles/common.style.css';
import { useSelector } from 'react-redux';
import { stringIsNotNullOrWhiteSpace } from './utils/utils';

const App = () => {
    const [selectedMovie, setSelectedMovie] =
        React.useState<MovieItemInfo | null>(null);

    const title = useSelector((s: AppState) => s.searchTerms.title);

    const handleMovieSelect = (movie: MovieItemInfo) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="home-page">
            <div className="header">
                <SearchBar />
            </div>

            {stringIsNotNullOrWhiteSpace(title) ? (
                <div className="content">
                    <MovieList handleMovieSelect={handleMovieSelect} />
                    {selectedMovie && (
                        <MovieItem imdbID={selectedMovie.imdbID} />
                    )}
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
