import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ''
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  handleAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState({ error: 'Please provide description and amount' });
    } else {
      this.setState({ error: '' });
      const { description, amount, note, createdAt } = this.state;
      this.props.onSubmit({
        description,
        note,
        amount: parseFloat(amount) * 100,
        createdAt: moment(createdAt).valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <h4>Expenseform</h4>
          <label htmlFor="description">
            Description
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Description"
              autoFocus
            />
          </label>
          <label htmlFor="note">
            Note
            <textarea
              name="note"
              placeholder="Note"
              value={this.state.note}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="amount">
            Amount
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
          </label>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            id="createdAt"
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <input type="submit" value="Add expense" />
        </form>
      </div>
    );
  }
}
