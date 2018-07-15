import {USER_DETAILS} from "../constants/action-types";

const initialState = {
    user_details: ""
}
export default function userReducer(state = initialState, action){
    switch(action.type){
        case USER_DETAILS:
            return {...state,user_details:[...state.user_details, action.payload]}
        default:
            return state;
    }
}