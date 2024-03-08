import { MovieType } from '../types/type';

export function stringIsNotNullOrWhiteSpace(value?: string) {
    return value !== null && value !== undefined && value.trim() !== '';
}

export function mapMovieTypeToApiParam(type: MovieType): string {
    switch (type) {
        case MovieType.Movies:
            return 'movie';
        case MovieType.Series:
            return 'series';
        case MovieType.Episodes:
            return 'episode';
        default:
            return '';
    }
}
