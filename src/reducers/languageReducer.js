export default function reducer(
    state = {
        language:'cn',
        fetching: false,
        fetched: false,        
        error: null,
    }, action) {
    switch (action.type) {
        case "TOGGLE_LANGUAGE_PENDING": {
            return { ...state, fetching: true }
            break;
        }
        case "TOGGLE_LANGUAGE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                language: action.payload
            }
            break;
        }
        case "TOGGLE_LANGUAGE_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
    }
    return state;
}
