import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, deleteExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  handleSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  handleDelete = e => {
    this.props.deleteExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.handleSubmit} expense={this.props.expense} />
        <button type="button" onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  deleteExpense: id => dispatch(deleteExpense(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
