/**
 * @jest-environment jsdom
 */
import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Login } from '../login';

Enzyme.configure({ adapter: new Adapter() });
describe('Login Component', () => {
  it('renders login form', () => {
    expect(shallow(<Login />).contains('loginForm'));
  });
});

test('Login component snapshot', () => {
  const shallowed = shallow(<Login />);
  expect(shallowed).toMatchSnapshot();
});

test('Login component snapshot', () => {
  const tree = render(<Login />);
  expect(tree).toMatchSnapshot();
});
