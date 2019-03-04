import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, defaultFilters } from '../fixtures/filters';

let setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={defaultFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
    />
  );
});

it('should render ExpenseListFilters with default filters', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters', () => {
  wrapper.setProps({ filters: filters });
  expect(wrapper).toMatchSnapshot();
});

it('should handle text filter change', () => {
  const value = 'changed';
  wrapper.find('[type="text"]').simulate('change', { target: { value } });
  expect(setTextFilter).toHaveBeenCalledWith(value);
});

it('should handle sortBy filter change to amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } });
  expect(sortByAmount).toHaveBeenCalled();
  expect(sortByDate).not.toHaveBeenCalled();
});

it('should handle sortBy filter change to date', () => {
  wrapper.find('select').simulate('change', { target: { value: 'date' } });
  expect(sortByAmount).not.toHaveBeenCalled();
  expect(sortByDate).toHaveBeenCalled();
});

it('should focus on DateRangePicker on click', () => {
  const value = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(value);
  expect(wrapper.state('focusedInput')).toBe(value);
});

it('should handle dates change', () => {
  const startDate = moment(0);
  const endDate = moment(0).add(20000, 'days');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});
