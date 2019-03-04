import moment from 'moment';

export const filters = {
  text: 'test',
  sortBy: 'date',
  startDate: moment(12),
  endDate: moment(13)
};

export const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
