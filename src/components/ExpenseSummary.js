import React from 'react';
import { connect } from 'react-redux';
import getTotalExpenses from '../utils/getTotalExpenses';
import getVisibleExpenses from '../utils/getVisibleExpenses';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const pluralize = expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h1>
        Viewing {expenseCount} {pluralize} totalling ${expensesTotal / 100}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getTotalExpenses(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
