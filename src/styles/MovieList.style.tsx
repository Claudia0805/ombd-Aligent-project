import styled from 'styled-components';

export const MovieListContainer = styled.div`
    overflow-x: hidden;

    // hide webkit scrollbar and customize own scrollbar
    &::-webkit-scrollbar {
        width: 0;
    }
    .infinite-scroll-component {
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: #c4c4c4;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #c4c4c4;
        }
    }

    .results-count {
        color: #c4c4c4;
        padding: 10px 40px;
    }

    .load-more-btn {
        color: #6f6f6f;
        font-size: 1em;
        font-weight: 500;
        border: none;
        text-align: center;
        background-color: #c4c4c4;
        padding: 10px;
        width: 100%;
    }

    .movie-card {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 40px;
    }

    .movie-info {
        padding: 0 20px 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: #6f6f6f;
    }

    .movie-poster img {
        height: 80px;
        width: 80px;
        min-width: 80px;
        object-fit: cover;
        border-radius: 10px;
    }

    @media screen and (max-width: 768px) {
        .results-count {
            padding: 10px;
            font-size: 16px;
        }

        .movie-card {
            flex-direction: column;
            padding: 10px;
            width: calc(100% - 20px);

            .movie-info {
                padding: 0;
                .movie-item-title,
                .movie-item-year {
                    font-size: 1em;
                }
            }
        }
    }
`;
