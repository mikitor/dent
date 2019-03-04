import moment from 'moment';
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

it('should create a "SORT_BY_DATE" action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

it('should create a "SORT_BY_AMOUNT" action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

it('should create a "SET_TEXT_FILTER" action object if there is nothing passed in', () => {
  expect(setTextFilter()).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
});

it('should create a "SET_TEXT_FILTER" action object if text is passed in', () => {
  const text = 'test text';
  expect(setTextFilter(text)).toEqual({ type: 'SET_TEXT_FILTER', text });
});

it('should create a "SET_START_DATE" action object if there is nothing passed in', () => {
  expect(setStartDate()).toEqual({ type: 'SET_START_DATE', startDate: undefined });
});

it('should create a "SET_START_DATE" action object if startDate is passed in', () => {
  const startDate = moment(123);
  expect(setStartDate(startDate)).toEqual({ type: 'SET_START_DATE', startDate });
});

it('should create a "SET_END_DATE" action object if there is nothing passed in', () => {
  expect(setEndDate()).toEqual({ type: 'SET_END_DATE', endDate: undefined });
});

it('should create a "SET_END_DATE" action object if endDate is passed in', () => {
  const endDate = moment(123);
  expect(setEndDate(endDate)).toEqual({ type: 'SET_END_DATE', endDate });
});
