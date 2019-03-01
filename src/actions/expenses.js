import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const deleteExpense = ({ id } = {}) => ({
  type: 'DELETE_EXPENSE',
  id
});

const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});

export { addExpense, deleteExpense, editExpense };
