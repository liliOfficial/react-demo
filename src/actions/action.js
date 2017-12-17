import { TOGGLE_LANGUAGE, SET_PERMISSION } from './actionType';
import axios from 'axios';

export const toggleLanguage = language => ({
    type: TOGGLE_LANGUAGE,
    language,
});
export const setPermission = permission => ({
    type: SET_PERMISSION,
    permission,
});

export function setUserName(name){
    return{
        type:'SET_USER_NAME',
        payload:name
    }
};
export function fetchTweets() {
    return function(dispatch) {
        axios.get("http://rest.learncode.academy/api/test123/tweets")
        .then((response) => {
            dispatch({type:"FETCH_TWEETS_FULFILLED", payload:response.data})
        })
        .catch((err) => {
            dispatch({type:"FETCH_TWEETS_REJECTED", payload:err})
        })
    }
}
