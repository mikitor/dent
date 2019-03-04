import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const HomePage = props => (
  <div>
    <ExpenseListFilters />
    <ExpenseSummary />
    <ExpenseList />
  </div>
);

export default HomePage;
