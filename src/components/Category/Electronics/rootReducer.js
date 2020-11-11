import {combineReducers} from 'redux';
import appleReducer from './Apple/appleReducer';
import redmiReducer from './Redmi/redmiReducer';

const rootReducer = combineReducers({
    redmi: redmiReducer,
    apple: appleReducer
})

export default rootReducer;