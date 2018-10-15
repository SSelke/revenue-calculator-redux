import { combineReducers } from 'redux';
import headerReducer from './reducer_header';
import visibilityReducer from './reducer_set_visibility';
import productsReducer from './reducer_products';
import expensesReducer from './reducer_expenses';

const rootReducer = combineReducers({
    header: headerReducer,
    visible: visibilityReducer,
    data: productsReducer,
    expenses: expensesReducer
});

export default rootReducer;