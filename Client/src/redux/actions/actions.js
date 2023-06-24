import { ADD_FAV, REMOVE_FAV, FILTER,ORDER, ALL_CHAR } from './types';
import axios from 'axios';

// export const addFav = (char) => {
//     return {
//         type: ADD_FAV,
//         payload: char
//     }
// }

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, /*mandamos por body*/character).then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } =  await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message)
        }
    };
};

export const allChar = () => {
    return {
        type: ALL_CHAR,
    }
}


export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            const {message} = error 
            console.log(message)
        }
    };
};