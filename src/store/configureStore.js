import { createStore, combineReducers } from 'redux';
import filtersReducer from '../reducers/filtersReducer';
import expensesReducer from '../reducers/expensesReducer';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
