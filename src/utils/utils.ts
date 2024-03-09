import { DEFAULT_YEAR_RANGE } from '../constants/constants';
import { MovieType, YearRange } from '../types/type';

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

export function isDefaultRange(range: YearRange): boolean {
    if (
        range.startYear === DEFAULT_YEAR_RANGE.startYear &&
        range.endYear === DEFAULT_YEAR_RANGE.endYear
    ) {
        return true;
    }
    return false;
}
