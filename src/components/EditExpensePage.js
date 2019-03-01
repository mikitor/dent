import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, deleteExpense } from '../actions/expenses';

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push('/');
        }}
        expense={props.expense}
      />
      <button
        type="button"
        onClick={e => {
          props.dispatch(deleteExpense({ id: props.match.params.id }));
          props.history.push('/');
        }}
      >
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
