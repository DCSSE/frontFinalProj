import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { listsReducer } from './listsReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    lists: listsReducer,
});

export default rootReducer;
