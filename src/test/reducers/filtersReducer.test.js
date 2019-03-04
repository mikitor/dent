import moment from 'moment';
import filtersReducer from '../../reducers/filtersReducer';

const state = {
  text: 'text',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

it('should set up default filter value', () => {
  const defaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  expect(filtersReducer(undefined, { type: '@@INIT' })).toEqual(defaultState);
});

it('should change text value in state', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'cool'
  };
  expect(filtersReducer(state, action)).toEqual({ ...state, text: action.text });
});

it('should change sortBy value to amount in state', () => {
  const action = {
    type: 'SORT_BY_AMOUNT'
  };
  expect(filtersReducer(state, action)).toEqual({ ...state, sortBy: 'amount' });
});

it('should change sortBy value to date in state', () => {
  const action = {
    type: 'SORT_BY_DATE'
  };
  expect(filtersReducer(state, action)).toEqual({ ...state, sortBy: 'date' });
});

it('should change startDate value in state', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment()
  };
  expect(filtersReducer(state, action)).toEqual({ ...state, startDate: action.startDate });
});

it('should change endDate value in state', () => {
  const action = {
    type: 'SET_END_DATE',
    startDate: moment()
  };
  expect(filtersReducer(state, action)).toEqual({ ...state, endDate: action.endDate });
});
