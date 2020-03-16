import React from 'react';
import { render } from '@testing-library/react';
import Intro from './Intro.component';

test('renders Intro', () => {
  const { queryByText } = render(<Intro /> );
  const title = queryByText(/Intro/i);
  expect(title).toBeDefined();
});
