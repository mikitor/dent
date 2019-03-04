import { addExpense, editExpense, deleteExpense } from '../../actions/expenses';

it('should create an "DELETE_EXPENSE" action object', () => {
  const expense = { id: 123 };
  expect(deleteExpense(expense)).toEqual({ type: 'DELETE_EXPENSE', ...expense });
});

it('should create an "EDIT_EXPENSE" action object', () => {
  const id = 123;
  const update = { description: 'test description' };
  expect(editExpense(id, update)).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    update
  });
});

it('should create an "ADD_EXPENSE" action object when object is passed in', () => {
  const expense = {
    description: 'Test desc',
    note: 'Test note',
    amount: 404,
    createdAt: 10
  };
  expect(addExpense(expense)).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

it('should create an "ADD_EXPENSE" action object when nothing is passed in', () => {
  expect(addExpense()).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: undefined,
      id: expect.any(String)
    }
  });
});
