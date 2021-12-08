import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL } from "../actions";

const initialState = {
    pokemon: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_POKEMON_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                isFetching: false,
                pokemon: action.payload
            }
        case FETCH_POKEMON_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return(state);
    }
}

export default reducer;