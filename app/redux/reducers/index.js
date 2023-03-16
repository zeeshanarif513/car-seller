import { combineReducers } from 'redux';
import UtilityReducer from './UtilityReducer';
import CarsReducer from './CarsReducer';

const rootReducer = combineReducers({
    UtilityReducer: UtilityReducer,
    CarsReducer: CarsReducer
})

export default rootReducer