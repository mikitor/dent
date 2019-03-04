import moment from 'moment';

export const expenseOne = {
  description: 'Test one desc',
  note: 'Test one note',
  amount: 400,
  createdAt: moment(14).valueOf(),
  id: '124'
};
export const expenseTwo = {
  description: 'Test two desc',
  note: 'Test two note',
  amount: 200,
  createdAt: moment(12).valueOf(),
  id: '123'
};

export const expenses = [expenseOne, expenseTwo];
