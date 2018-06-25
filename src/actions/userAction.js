import {USER_DETAILS} from "../constants/action-types";

export const userDetails = (PuserName) => ({type: USER_DETAILS, payload: PuserName});