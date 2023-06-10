// import {addFav} from '../actions/actions';
import {ADD_FAV, REMOVE_FAV, FILTER,ORDER,ALL_CHAR } from "../actions/types"

const initialState ={
    myFavorites : [], //creo que estoy guardando solo el ID del character, no el objeto
    allCharacters : []
}

const rootReducer = (state = initialState, {type, payload}) =>{
 
    switch (type) {
        case ALL_CHAR:
            return {
                ...state,
                myFavorites: [...state.allCharacters]
            }
            ;

            case ADD_FAV:
                return {myFavorites: payload, allCharacters: payload };

            // case REMOVE_FAV:
            //     return {
            //         ...state,
            //         myFavorites: state.allCharacters.filter((char)=> char.id != payload),
            //         allCharacters: state.allCharacters.filter((char)=> char.id != payload)
            //     }

            
            case REMOVE_FAV:

                return {myFavorites: payload, allCharacters: payload }
            ;
                case FILTER:
                    return {
                        ...state,
                        myFavorites : state.allCharacters.filter((char)=> char.gender === payload)
                    }
                    ;
                case ORDER:
                    return {
                        ...state,
                        myFavorites : state.allCharacters.sort((a,b)=> {
                            if(a.id > b.id){
                                return payload === "A" ? 1: -1;
                            }
                            if(a.id < b.id){
                                return payload === "A" ? -1: 1;
                            }
                            return 0;
                        })
                    }
                    ;
        default:
            return {
                ...state
            }
        ;
    }
}

export default rootReducer;
//calback de ordenamineto del sort
//const sortF= (a,b) => (payload === "A" ? a.id - b.id : b.id -a,id);