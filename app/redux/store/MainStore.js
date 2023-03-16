import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';





const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        createLogger(),
    )
)

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
    store,
    persistor,
};