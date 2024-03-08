import { MovieItemInfo, YearRange } from '../types/type';

export function filterMoviesByYear(
    movie: MovieItemInfo,
    range?: YearRange,
): boolean {
    if (!range || range.endYear == null || range.startYear == null) {
        return false;
    }

    const year = Number(movie.Year);

    return year >= range.startYear && year <= range.endYear;
}
