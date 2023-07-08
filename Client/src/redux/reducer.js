import { ADD_FAV, REMOVE_FAV, SET_LOADING } from "./actionType.js"

const initialState = {
    myFavorites: [],
    isLoading: false
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        /* // Case sin server
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
            } */
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload
            };
        /* // Case sin server
        case REMOVE_FAV:
            const favoRet = state.myFavorites.filter((per) => per.id !== payload)
            return {
                ...state,
                myFavorites: favoRet,
            } */
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
}