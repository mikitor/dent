import moment from 'moment';
import getVisibleExpenses from '../../utils/getVisibleExpenses';
import { expenseOne, expenseTwo, expenses } from '../fixtures/expenses';

describe('getVisibleExpenses', () => {
  it('should filter based on text', () => {
    const filters = {
      text: 'one',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([expenseOne]);
  });

  it('should filter based on text if there is no match', () => {
    const filters = {
      text: 'cool',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([]);
  });

  it('should sort by date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([expenseTwo, expenseOne]);
  });

  it('should sort by amount', () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([expenseTwo, expenseOne]);
  });

  it('should filter based on startDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(13),
      endDate: undefined
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([expenseOne]);
  });

  it('should filter based on endDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(13)
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([expenseTwo]);
  });

  it('should filter dates between startDate and endDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(12),
      endDate: moment(14)
    };
    expect(getVisibleExpenses(expenses, filters)).toEqual([expenseTwo, expenseOne]);
  });
});
