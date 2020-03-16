import React from 'react';
import { render } from '@testing-library/react';
import Guide from './Guide.component';

test('renders guide', () => {
  const { queryAllByText } = render(<Guide />);
  const title = queryAllByText(/Guide/i);
  expect(title).toBeDefined();
});
