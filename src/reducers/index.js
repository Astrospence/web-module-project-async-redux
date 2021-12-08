

const initialState = {
    name: '',
    type: '',
    abilities: '',
    baseStats: {
        hp: '',
        attack: '',
        defense: '',
        spAttack: '',
        spDefense: '',
        speed: '',
        total: ''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return(state);
    }
}

export default reducer;