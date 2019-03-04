import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenseOne, expenseTwo } from '../fixtures/expenses';

let editExpense, deleteExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  deleteExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenseOne}
      deleteExpense={deleteExpense}
      editExpense={editExpense}
      history={history}
    />
  );
});

it('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should call delete expense with valid props', () => {
  wrapper.find('button').simulate('click');
  expect(deleteExpense).toHaveBeenCalledWith({ id: expenseOne.id });
  expect(history.push).toHaveBeenCalledWith('/');
});

it('should call edit expense with valid props', () => {
  const { note, description, amount, createdAt } = expenseTwo;
  wrapper.find('ExpenseForm').simulate('submit', { note, description, amount, createdAt });
  expect(editExpense).toHaveBeenCalledWith(expenseOne.id, { note, description, amount, createdAt });
  expect(history.push).toHaveBeenCalledWith('/');
});
