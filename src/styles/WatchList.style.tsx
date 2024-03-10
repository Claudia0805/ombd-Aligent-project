import styled from 'styled-components';

export const WatchListContainer = styled.div`
    .watch-list-btns {
        display: flex;
        align-items: center;

        > button {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666666;
            height: 30px;
            width: 110px;
            border-radius: 3px;
            border: 1px solid #666666;
            margin-right: 15px;
            background-color: white;

            &.selected {
                color: #666666;
            }
            &.selected:hover {
                color: white;
                background-color: #ff4136;
                border: none;
            }

            &.unselected {
                color: #666666;
                align-items: center;
            }
            &.unselected:hover {
                color: white;
                background-color: #666666;
                border: none;
            }
        }

        .my-watchlist-button {
            &:hover {
                color: white;
                background-color: #666666;
                border: none;
            }
        }

        label {
            display: flex;
            align-items: center;
            svg {
                padding-right: 5px;
            }
        }
    }
`;
