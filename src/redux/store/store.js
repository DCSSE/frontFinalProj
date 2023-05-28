import { combineReducers, createStore } from 'redux';
import { listReduce } from '../reducers/list-reduce';
import { localStorageReducer } from '../reducers/local-storage';
import { moviesReducer } from "../reducers/reducer"
import { searchIntialValue } from '../reducers/searchInput';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// const mapStateToProps = (state) => {
//     return {
//         movies: state.movies,
//         list: state.list,
//         firstsearchLine: state.firstsearchLine,
//         localdata: state.localdata,
//     };
// };

const reducers = combineReducers({
    movies: moviesReducer,
    list: listReduce,
    firstsearchLine : searchIntialValue,
    localdata: localStorageReducer
})

export const GlobalState = createStore(
    reducers
)
