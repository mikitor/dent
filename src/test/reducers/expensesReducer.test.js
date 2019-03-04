import moment from 'moment';
import expensesReducer from '../../reducers/expensesReducer';
import { expenseOne, expenseTwo, expenses } from '../fixtures/expenses';

it('should set up default state', () => {
  expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([]);
});

it('should add expense to state', () => {
  const expense = {
    id: '1',
    description: 'test',
    note: 'cool',
    amount: 1110,
    createdAt: moment(12)
  };
  const state = expensesReducer(undefined, {
    type: 'ADD_EXPENSE',
    expense
  });
  expect(state).toEqual([expense]);
});

it('should delete expense by id', () => {
  const state = expensesReducer(expenses, {
    type: 'DELETE_EXPENSE',
    id: expenseOne.id
  });
  expect(state).not.toContain(expenseOne);
  expect(state).toEqual([expenseTwo]);
});

it('should not delete expense if id is wrong', () => {
  const state = expensesReducer(expenses, {
    type: 'DELETE_EXPENSE',
    id: '11'
  });
  expect(state).toEqual(expenses);
});

it('should edit the expense by id', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenseTwo.id,
    update: { description: 'Changed desc' }
  });
  expect(state).toContainEqual({ ...expenseTwo, description: 'Changed desc' });
  expect(state).not.toContainEqual(expenseTwo);
});

it('should not edit the expense if id is wrong', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '211',
    update: { description: 'Changed desc' }
  });
  expect(state).toEqual(expenses);
});
