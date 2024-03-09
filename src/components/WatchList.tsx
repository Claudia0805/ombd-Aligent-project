import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import React, { useState, Fragment, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

import { MovieCard } from './MovieCard';
import {
    removeFromWatchlist,
    addToWatchlist,
} from '../redux/actions/watchlistActions';
import { AppState, MovieItemInfo } from '../types/type';
import { WatchListContainer } from '../styles/WatchList.style';

interface WatchListProps {
    movieDetail: MovieItemInfo;
}

const WatchList: React.FC<WatchListProps> = ({ movieDetail }) => {
    const [isDrawerOpened, setDrawerOpened] = useState(false);
    const dispatch = useDispatch();

    const watchList: Array<MovieItemInfo> = useSelector(
        (state: AppState) => state.watchList,
    );

    const handleWatchList = () => {
        const inWatchList = watchList.find(
            (movie) => movie.imdbID === movieDetail.imdbID,
        );
        if (!inWatchList) {
            dispatch(addToWatchlist(movieDetail));
        } else {
            dispatch(removeFromWatchlist(movieDetail.imdbID));
        }
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpened(open);
    };

    const removeFromWatchListTemp = (movie: MovieItemInfo) => {
        dispatch(removeFromWatchlist(movie.imdbID));
    };

    const isSelected = useMemo(() => {
        return watchList.find((movie) => movie.imdbID === movieDetail.imdbID);
    }, [movieDetail.imdbID, watchList]);

    return (
        <WatchListContainer className="watch-list">
            <div className="watch-list-btns">
                <button
                    className={`watchlist-button ${
                        isSelected ? 'selected' : 'unselected'
                    }`}
                    onClick={() => {
                        handleWatchList();
                    }}
                >
                    <label>
                        {isSelected ? (
                            <Fragment>
                                <BookmarkRemoveIcon />
                                Remove
                            </Fragment>
                        ) : (
                            <Fragment>
                                <BookmarkAddIcon />
                                Add
                            </Fragment>
                        )}
                    </label>
                </button>

                <button
                    className="my-watchlist-button"
                    onClick={() => {
                        setDrawerOpened(true);
                    }}
                >
                    <label>My WatchList</label>
                </button>
            </div>

            <Drawer
                anchor={'right'}
                open={isDrawerOpened}
                onClose={toggleDrawer(false)}
            >
                <div className="watchlist-title">
                    <div>Your watch list</div>
                    <CloseIcon
                        className="watchlist-close-icon"
                        onClick={() => {
                            setDrawerOpened(false);
                        }}
                    />
                </div>

                {watchList.length === 0 ? (
                    <div className="no-movie">
                        There is no movie in your watchlist.
                    </div>
                ) : (
                    <Fragment>
                        {watchList.map((movie, index) => (
                            <div key={index} className="watchlist-item">
                                <CancelIcon
                                    className="watchlist-remove-icon"
                                    onClick={() => {
                                        removeFromWatchListTemp(movie);
                                    }}
                                />
                                <MovieCard
                                    movie={movie}
                                    onSelect={() => {
                                        console.log('==>');
                                    }}
                                />
                            </div>
                        ))}
                    </Fragment>
                )}
            </Drawer>
        </WatchListContainer>
    );
};

export default WatchList;
