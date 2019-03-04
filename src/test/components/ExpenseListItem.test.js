import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import { expenseOne } from '../fixtures/expenses';

it('should render ExpenseListItem component with props', () => {
  const wrapper = shallow(<ExpenseListItem {...expenseOne} />);
  expect(wrapper).toMatchSnapshot();
});
