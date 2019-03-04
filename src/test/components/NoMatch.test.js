import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from '../../components/NoMatch';

it('should render NoMatch component', () => {
  const wrapper = shallow(<NoMatch />);
  expect(wrapper).toMatchSnapshot();
});
