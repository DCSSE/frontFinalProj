import { combineReducers, createStore } from 'redux';
import { listReduce } from '../reducers/list-reduce';
import { localStorageReducer } from '../reducers/local-storage';
import { moviesReducer } from "../reducers/reducer"
import { searchIntialValue } from '../reducers/searchInput';

const reducers = combineReducers({
    movies: moviesReducer,
    list: listReduce,
    firstsearchLine : searchIntialValue,
    localdata: localStorageReducer
})

export const GlobalState = createStore(
    reducers
)
