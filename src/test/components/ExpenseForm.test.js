import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import { expenseOne } from '../fixtures/expenses';

it('should render ExpenseForm component', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseForm component with expenses', () => {
  const wrapper = shallow(<ExpenseForm expense={expenseOne} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  wrapper.find('form').simulate('submit', fakeEvent);
  expect(wrapper.state('error')).toEqual('Please provide description and amount');
  expect(wrapper.state('error').length).toBeGreaterThan(0);

  expect(wrapper).toMatchSnapshot();
});

it('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  const value = 'test description';
  const event = {
    target: { value, name: 'description' }
  };
  wrapper.find('[name="description"]').simulate('change', event);
  expect(wrapper.state('description')).toBe(value);

  expect(wrapper).toMatchSnapshot();
});

it('should set note on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  const value = 'test note';
  const event = {
    target: { value, name: 'note' }
  };
  wrapper.find('[name="note"]').simulate('change', event);
  expect(wrapper.state('note')).toBe(value);

  expect(wrapper).toMatchSnapshot();
});

it('should set amount on valid input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  const value = '12.22';
  const event = {
    target: { value, name: 'amount' }
  };
  wrapper.find('[name="amount"]').simulate('change', event);
  expect(wrapper.state('amount')).toBe(value);

  expect(wrapper).toMatchSnapshot();
});

it('should not set amount on invalid input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  const value = '11.111';
  const event = {
    target: { value }
  };
  wrapper.find('[name="amount"]').simulate('change', event);
  expect(wrapper.state('amount')).not.toBe(value);
  expect(wrapper.state('amount')).toBe('');

  expect(wrapper).toMatchSnapshot();
});

it('should call onSubmit prop for  valid form submission', () => {
  const { note, description, amount, createdAt } = expenseOne;
  const mockFn = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenseOne} onSubmit={mockFn} />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error')).toBe('');
  expect(mockFn).toHaveBeenCalledWith({ note, description, amount, createdAt });
});

it('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

it('should set focus on SingleDatePicker', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('focused')).toBe(focused);
});
