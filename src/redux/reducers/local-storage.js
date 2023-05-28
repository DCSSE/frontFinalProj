// import {
//     addToList,
//     listIsEmpty,
//     localStorageAction, localStorageDeleteAction, localStorageIntialAction,
//     removeToList,
//     searchIntialValueAction,
//     updateListTitle
// } from "../actions/action";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(
//         {
//             getMovies,
//             addToList,
//             removeToList,
//             listIsEmpty,
//             searchIntialValueAction,
//             updateListTitle,
//             localStorageAction,
//             localStorageDeleteAction,
//             localStorageIntialAction
//         },
//         dispatch
//     );
// };
// export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);

export const localStorageReducer = (state = [], action) => {
    if (action.type === 'GET_ITEM') {
        localStorage.setItem("mylist", JSON.stringify([...state, ...action.payload]))
        return [...state, ...action.payload]
    } else if (action.type === 'DELETE_ITEM') {
        localStorage.setItem("mylist", JSON.stringify([...state.filter(item => item.id !== action.payload)]))
        return [...state.filter(item => item.id !== action.payload)]
    }
    else if (action.type === 'INTIAL_ITEM') {
        localStorage.setItem("mylist", JSON.stringify([...action.payload]))
        return [...action.payload]
    }
    else if (action.type === 'UPDATE_LIST_TITLE') {
        const updatedState = state.map(item => {
            if (item.id === action.payload.id) {
                return { ...item, title: action.payload.title };
            }
            return item;
        });
        localStorage.setItem("mylist", JSON.stringify(updatedState));
        return updatedState;
    }
    return state
}
