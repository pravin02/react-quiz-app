import React from 'react';
import { render } from '@testing-library/react';
import QuizApp from './QuizApp';

test('renders learn react link', () => {
  const { getByText } = render(<QuizApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
