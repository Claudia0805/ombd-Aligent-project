export interface YearRange {
    startYear: number;
    endYear: number;
}

export enum MovieType {
    Any = 'Any',
    Movies = 'Movies',
    Series = 'Series',
    Episodes = 'Episodes',
}

export interface SearchTerms {
    title?: string;
    yearRange?: YearRange;
    type?: MovieType;
    page?: number;
}

interface Rating {
    Source: string;
    Value: string;
}

export interface MovieItemInfo {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: ReadonlyArray<Rating>;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
    Response: string;
}

export interface MovieListState {
    movieList: Array<MovieItemInfo>;
    response?: string;
    totalResult?: number;
}

export interface AppState {
    movieListState?: MovieListState;
    watchList: Array<MovieItemInfo>;
    searchTerms: SearchTerms;
    isFetching: boolean;
    error?: string;
}
