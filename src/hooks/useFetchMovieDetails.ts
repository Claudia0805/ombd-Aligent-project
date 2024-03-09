import { MovieItemInfo } from '../types/type';
import { useEffect, useState } from 'react';
import { fetchMovieDetailApi } from '../utils/fetchMovieDetail';

interface FetchMovieDetailsResult {
    isLoading: boolean;
    movie?: MovieItemInfo;
    error?: string;
}

export function useFetchMovieDetails(imdbID: string): FetchMovieDetailsResult {
    const [movie, setMovie] = useState<MovieItemInfo | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoading(true);
            setError(undefined);

            try {
                const movieDetails = await fetchMovieDetailApi(imdbID);
                setMovie(movieDetails);
                setIsLoading(false);
            } catch (error) {
                setError((error as Error).message);
                setIsLoading(false);
            }
        };

        fetchMovieDetails();
    }, [imdbID]);

    return {
        movie,
        isLoading,
        error,
    };
}
