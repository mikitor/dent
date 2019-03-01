import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null
    };
  }

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setEndDate(endDate));
    this.props.dispatch(setStartDate(startDate));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        {this.props.filters.sortBy === 'date' && (
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId="startDate"
            endDate={this.props.filters.endDate}
            endDateId="endDate"
            onDatesChange={this.handleDatesChange}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            isOutsideRange={() => false}
            numberOfMonths={1}
            showClearDates
          />
        )}

        <button type="submit">Filter</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
