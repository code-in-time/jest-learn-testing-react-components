import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test the snapshot
it('Matched snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot();
}) 
