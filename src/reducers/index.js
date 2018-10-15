import { combineReducers } from 'redux';
import headerReducer from './reducer_header';
import visibilityReducer from './reducer_set_visibility';
import productsReducer from './reducer_products';

const rootReducer = combineReducers({
    header: headerReducer,
    visible: visibilityReducer,
    data: productsReducer
});

export default rootReducer;