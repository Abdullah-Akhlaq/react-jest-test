import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('counter increments and decrements', () => {
  const { getByText, getByTestId } = render(<App />);

  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');
  const countDisplay = getByTestId('count');

  expect(countDisplay).toHaveTextContent('0');

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('1');

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent('0');
});
