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

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null
    };
  }

  handleTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  handleSortByChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.setEndDate(endDate);
    this.props.setStartDate(startDate);
  };

  handleFocusChange = focusedInput => this.setState({ focusedInput });

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.handleTextChange} />
        <select value={this.props.filters.sortBy} onChange={this.handleSortByChange}>
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
            onFocusChange={this.handleFocusChange}
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

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setStartDate: startDate => dispatch(setStartDate(startDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
