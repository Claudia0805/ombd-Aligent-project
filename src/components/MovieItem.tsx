import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import WatchList from './WatchList';
import DefaultPoster from '../assets/images/default-movie.png';

import 'react-loading-skeleton/dist/skeleton.css';
import {
    MovieDetailSection,
    MovieItemContainer,
} from '../styles/MovieItem.style';
import { MovieItemInfo } from '../types/type';
import { fetchMovieDetailApi } from '../utils/fetchMovieDetail';

interface MovieItemProps {
    imdbID: string;
}

const MovieItem: React.FC<MovieItemProps> = ({ imdbID }) => {
    const [movie, setMovie] = useState<MovieItemInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoading(true);
            try {
                const movieDetails = await fetchMovieDetailApi(imdbID);
                setMovie(movieDetails);
            } catch (error) {
                console.error('Failed to fetch movie details', error);
                setMovie(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovieDetails();
    }, [imdbID]);

    if (isLoading || !movie) {
        return (
            <MovieItemContainer className="movie-detail">
                <Skeleton height={350} width={250} />
                <div className="movie-info">
                    <Skeleton height={36} width={300} />
                    <Skeleton count={4} />
                </div>
            </MovieItemContainer>
        );
    }

    const {
        Poster,
        Title,
        Year,
        Genre,
        Actors,
        Runtime,
        Rated,
        Plot,
        Ratings,
    } = movie;

    console.log('==>detail', movie);

    return (
        <MovieItemContainer className="movie-detail">
            <MovieDetailSection className="movie-detail-section border-bottom">
                <div className="movie-poster">
                    <img
                        src={Poster === 'N/A' ? DefaultPoster : Poster}
                        alt="poster"
                    />
                </div>

                <div className="movie-info">
                    <div className="watch-list">
                        <WatchList movieDetail={movie} />
                    </div>
                    <div className="basic-info">
                        <div className="movie-title">{Title}</div>
                        <div className="movie-sub-title">
                            <p>
                                <span className="movie-rated">{Rated}</span>
                                <span className="movie-year">
                                    {`  ${Year} · ${Genre} · ${Runtime}`}
                                </span>
                            </p>

                            <p className="movie-actors">{Actors}</p>
                        </div>
                    </div>
                </div>
            </MovieDetailSection>

            <div className="movie-plot border-bottom">{Plot}</div>

            <div className="movie-ratings font-small">
                {Ratings.map((rating, index) => {
                    return (
                        <div key={index} className="movie-rating border-right">
                            <span className="value">{rating.Value}</span>
                            <span>{rating.Source}</span>
                        </div>
                    );
                })}
            </div>
        </MovieItemContainer>
    );
};

export default MovieItem;
