import React from 'react';
import styled from 'styled-components';

import MovieItem from './components/MovieItem';
import { MovieList } from './components/MovieList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { MovieItemInfo } from './types/type';

import './styles/common.style.css';

const App = () => {
    const [selectedMovie, setSelectedMovie] =
        React.useState<MovieItemInfo | null>(null);

    const handleMovieSelect = (movie: MovieItemInfo) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="home-page">
            <div className="header">
                <SearchBar />
            </div>

            <div className="content">
                <MovieList handleMovieSelect={handleMovieSelect} />
                {selectedMovie && <MovieItem imdbID={selectedMovie.imdbID} />}
            </div>
        </div>
    );
};

export default App;
