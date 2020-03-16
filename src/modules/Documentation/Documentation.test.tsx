import React from 'react';
import { render } from '@testing-library/react';
import Documentation from './Documentation.component';

test('renders documentation', () => {
  const { queryByText } = render(<Documentation />);
  const title = queryByText(/Documentation/i);
  expect(title).toBeDefined();
});
