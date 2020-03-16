import React from 'react';
import { render } from '@testing-library/react';
import Reference from './Reference.component';

test('renders Reference', () => {
  const { queryByText } = render(<Reference />);
  const title = queryByText(/Reference/i);
  expect(title).toBeDefined();
});
