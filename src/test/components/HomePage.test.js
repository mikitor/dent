import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/HomePage';

it('should render HomePage component', () => {
  const wrapper = shallow(
    <HomePage
      filters={{ sortBy: 'date', startDate: undefined, endDate: undefined, text: 'test' }}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
