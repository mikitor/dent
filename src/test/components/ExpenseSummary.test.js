import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { expenses, expenseOne } from '../fixtures/expenses';
import getTotalExpenses from '../../utils/getTotalExpenses';

it('should render ExpenseSummary component with multiple expenses', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={expenses.length} expensesTotal={getTotalExpenses(expenses)} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseSummary component with no expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseSummary component with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={expenseOne.amount} />);
  expect(wrapper).toMatchSnapshot();
});
