import getTotalExpenses from '../../utils/getTotalExpenses';
import { expenses, expenseOne, expenseTwo } from '../fixtures/expenses';

it('should return 0 if there are no expenses', () => {
  expect(getTotalExpenses([])).toBe(0);
});

it('should return the amount if there is one expense', () => {
  expect(getTotalExpenses([expenseTwo])).toBe(expenseTwo.amount);
});

it('should add up all the expenses if there is multiple expenses', () => {
  expect(getTotalExpenses(expenses)).toBe(expenseOne.amount + expenseTwo.amount);
});
