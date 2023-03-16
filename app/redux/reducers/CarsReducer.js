import { CARS_DETAILS } from "../constants";

const INITIAL_STATE = {
    details: []
}

export default function CarsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case CARS_DETAILS:
            return {
                ...state,
                details: action.details
            }
        default:
            return state
    }
}