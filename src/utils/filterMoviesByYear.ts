import { MovieItemInfo, MovieType, YearRange } from '../types/type';
import { isDefaultRange } from './utils';

export function filterMoviesByYear(
    movie: MovieItemInfo,
    movieType: MovieType,
    range?: YearRange,
): boolean {
    if (!range || range.endYear == null || range.startYear == null) {
        return false;
    }

    if (isDefaultRange(range)) {
        return true;
    }

    const isValidSeries = filterSeriesByYear(movie, range);

    if (movieType === MovieType.Series) {
        return isValidSeries;
    }

    const year = Number(movie.Year);

    const isValidMovie = year >= range.startYear && year <= range.endYear;

    if (movieType === MovieType.Any) {
        return isValidMovie || isValidSeries;
    }

    return isValidMovie;
}

export function filterSeriesByYear(
    movie: MovieItemInfo,
    range: YearRange,
): boolean {
    const rangeArray = movie.Year.split('-').map(Number);

    const seriesStartInsideRange =
        rangeArray[0] >= range.startYear && rangeArray[0] <= range.endYear;
    const seriesEndInsideRange =
        rangeArray[1] >= range.startYear && rangeArray[1] <= range.endYear;

    return seriesStartInsideRange || seriesEndInsideRange;
}
