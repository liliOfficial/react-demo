export default function reducer(
    state = {
        tweets:[],
        fetching: false,
        fetched: false,        
        error: null,
    }, action) {
    switch (action.type) {
        case "SET_PERMISSION_PENDING": {
            return { ...state, fetching: true }
            break;
        }
        case "SET_PERMISSION_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                language: action.payload
            }
            break;
        }
        case "SET_PERMISSION_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
            break;
        }
    }
    return state;
}