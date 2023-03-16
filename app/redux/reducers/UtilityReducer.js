import { USER_DETAILS } from "../constants";

const INITIAL_STATE = {
    details: null
}

export default function UtilityReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case USER_DETAILS:
            return {
                ...state,
                details: action.details
            }
        default:
            return state
    }
}