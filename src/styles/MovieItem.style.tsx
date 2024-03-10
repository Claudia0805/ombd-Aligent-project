import styled from 'styled-components';

export const MovieDetailSection = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;

    .movie-poster img {
        height: 350px;
        width: 250px;
        border-radius: 10px;
    }

    .movie-info {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        justify-content: space-between;
    }

    .movie-title {
        font-size: 32px;
        font-weight: bold;
        color: #333;
    }

    .movie-sub-title {
        font-size: 16px;
    }

    .movie-rated {
        border: 1px solid black;
        padding: 3px 10px;
        border-radius: 5px;
        font-weight: 500;
        margin-right: 5px;
    }

    .movie-actors {
        color: #333;
    }
`;

export const MovieItemContainer = styled.div`
    &.movie-detail {
        display: flex;
        flex-direction: column;
        padding-left: 30px;
        color: #666666;
    }

    .movie-plot {
        display: flex;
        align-items: center;
        padding: 20px 0;
        padding-right: 20px;
        font-size: 16px;
    }

    .movie-ratings {
        display: flex;
        justify-content: center;
        padding: 20px 0;
        text-align: center;
    }

    .movie-rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 20px;
        flex-basis: 30%;

        .value {
            padding-bottom: 10px;
        }
    }

    .movie-rating:last-child {
        border-right: none;
        padding-right: 20px;
        margin-right: 20px;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .movie-detail-section {
            flex-direction: column;
            align-items: center;
        }

        .movie-poster img {
            max-height: 300px;
            max-width: 200px;
        }

        .movie-sub-title {
            display: flex;
            flex-direction: column;
        }

        .movie-info {
            margin-left: 0;
            margin-top: 20px;
        }

        .movie-ratings {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .movie-rating {
            padding: 10px 0;
            width: 100%;
            border-bottom: 1px solid #c4c4c4;
        }

        .movie-rating:last-child {
            border: none;
            padding-right: 0;
            margin-right: 0;
        }

        .movie-rating:not(:last-child) {
            border-right: none;
            padding-right: 0;
            margin-right: 0;
            padding-bottom: 20px;
        }
    }
`;
