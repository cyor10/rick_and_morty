import { ADD_FAV, REMOVE_FAV } from "./actionType.js"

const initialState = {
    myFavorites: [],
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
            }
        case REMOVE_FAV:
            const favoRet = state.myFavorites.filter((per) => per.id !== payload)
            return {
                ...state,
                myFavorites: favoRet,
            }
        default:
            return state;
    }
}