import React, { FC } from 'react';
import styled from 'styled-components';

import DefaultPoster from '../assets/images/default-movie.png';
import { MovieItemInfo } from '../types/type';

interface MovieCardProps {
    movie: MovieItemInfo;
    onSelect: (selectedItem: MovieItemInfo) => void;
}

const MovieCardContainer = styled.div`
    display: flex;
    padding: 20px 40px;

    &:hover,
    &.selected {
        background: #ebebeb;
    }
`;

export const MovieCard: FC<MovieCardProps> = ({ movie, onSelect }) => {
    return (
        <MovieCardContainer
            onClick={() => onSelect(movie)}
            className="movie-card border-bottom"
        >
            <div className="movie-poster">
                <img
                    src={movie.Poster === 'N/A' ? DefaultPoster : movie.Poster}
                    alt="Movie Poster"
                />
            </div>

            <div className="movie-info">
                <div className="movie-item-title padding-bottom-10">
                    {movie.Title}
                </div>
                <div className="movie-item-year">
                    {parseInt(movie.Year, 10)}
                </div>
            </div>
        </MovieCardContainer>
    );
};
