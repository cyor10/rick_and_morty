import { ADD_FAV, REMOVE_FAV, SET_LOADING } from "./actionType.js";
import axios from "axios";

/* //Action sin server
export function addFav(personaje) {
    return {
        type: ADD_FAV,
        payload: personaje
    }
}; */

/* //Action promesas 
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character)
            .then(({ data }) => {
                return dispatch({
                    type: ADD_FAV,
                    payload: data,
                });
            });
    };
}; */

export const addFav = (character) => {
    return async function (dispatch) {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav'
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            })
        } catch (error) {
            if (error.response.status === 404) {
                return alert('Id ya esta en favoritos')
            }
        }
    }
}

/* //Action sin server
export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}; */

/* //Action promesas 
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + Number(id);
    return (dispatch) => {
        axios.delete(endpoint)
            .then(({ data }) => {
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data,
                });
            });
    };
}; */

export const removeFav = (id) => {
    return async function (dispatch) {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
            const { data } = await axios.delete(endpoint)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: isLoading,
});
