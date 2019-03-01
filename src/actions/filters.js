const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

export { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate };
