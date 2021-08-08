export const setCountry = (payload) => ({
    type: 'SET_COUNTRY',
    payload,
});
  
export const getCountry = (payload) => ({
    type: 'GET_COUNTRY',
    payload,
});

export const setAnswerCorrectCount = (payload) => ({
    type: 'SET_ANSWER_CORRECT_COUNT',
    payload,
});

export const setResetAnswerCount = (payload) => ({
    type: 'SET_RESET_ANSWER_COUNT',
    payload,
});