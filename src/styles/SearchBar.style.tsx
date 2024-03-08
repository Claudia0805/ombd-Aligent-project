import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    &.search-bar {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        min-height: 120px;
        background-color: #666666;
        color: #ffffff;
    }

    .search-title-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .search-title-container .search-icon {
        font-size: 30px;
    }

    .search-title-container input {
        border: none;
        outline: none;
        box-shadow: none;
        margin-bottom: 0;
        background-color: #666666;
        color: #ffffff;
        font-size: 25px;
    }

    .search-title-container input:-webkit-autofill,
    .search-title-container input:-webkit-autofill:hover,
    .search-title-container input:-webkit-autofill:focus,
    .search-title-container input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: white;
        -webkit-box-shadow: 0 0 0px 1000px #666666 inset !important;
        caret-color: white;
    }

    .search-year-container {
        color: #c4c4c4;
    }

    .search-year-slider {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: 250px;
        .search-year-mark-left {
            margin-right: 20px;
        }
        .search-year-mark-right {
            margin-left: 20px;
        }
    }

    .MuiSlider-root {
        color: #c4c4c4;

        .MuiSlider-rail {
            background-color: #ffffff;
            opacity: 1;
            height: 8px;
            border-radius: 4px;
        }

        .MuiSlider-track {
            height: 8px;
        }

        .MuiSlider-thumb {
            box-shadow: none;
        }
    }

    .search-type-container {
        color: #c4c4c4;

        .MuiFormControl-root {
            .MuiRadio-root {
                color: #c4c4c4;
            }
            .Mui-checked {
                color: #ffffff;
            }
        }
    }

    @media screen and (max-width: 960px) {
        .search-bar {
            justify-content: flex-start;
        }
        .search-year-container,
        .search-type-container {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            min-width: 300px;
        }
        .search-type-container {
            align-items: center;
        }
        .search-year-container .search-year-slider {
            min-width: 250px;
        }
        .search-year-label,
        .search-type-label {
            padding-right: 10px;
        }
    }

    @media screen and (max-width: 600px) {
        .search-bar {
            min-height: 160px;
            justify-content: flex-start;
        }
        .search-title-container {
            padding-top: 10px;
        }
        .search-title-container .search-icon {
            font-size: 25px;
        }
        .search-title-container input {
            font-size: 20px;
        }
        .search-type-container {
            align-items: baseline;
        }
    }
`;
