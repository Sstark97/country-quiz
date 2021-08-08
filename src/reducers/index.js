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
        
        case 'SET_ANSWER_CORRECT_COUNT':
            return {
                ...state,
                answerCorrectCount: state.answerCorrectCount + 1
            }
        
        case 'SET_RESET_ANSWER_COUNT':
            return {
                ...state,
                answerCorrectCount: 0
            }

        default:
            return state;
    }

}

export default reducer;