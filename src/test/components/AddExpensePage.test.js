import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expenseOne } from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

it('should render AddExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should submit valid data', () => {
  const { note, description, amount, createdAt } = expenseOne;
  wrapper.find('ExpenseForm').simulate('submit', { note, description, amount, createdAt });
  expect(addExpense).toHaveBeenCalledWith({ note, description, amount, createdAt });
  expect(history.push).toHaveBeenCalledWith('/');
});
