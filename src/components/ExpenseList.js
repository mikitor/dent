import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../utils/getVisibleExpenses';

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      <ul>
        {props.expenses.map((expense, index) => (
          <ExpenseListItem {...expense} key={index} />
        ))}
      </ul>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
