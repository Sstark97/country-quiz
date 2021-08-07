const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_COUNTRY':
            return {
                ...state,
                country: action.payload
            };
        

        case 'GET_COUNTRY':
            return {
                ...state,
                country: state.country
            }

        default:
            return state;
    }

}

export default reducer;