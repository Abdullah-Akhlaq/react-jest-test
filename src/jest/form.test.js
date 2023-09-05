

import React from 'react';
import AntDesignForm from '../components/form';
import { render, screen } from '@testing-library/react';



test('renders form fields', () => {
  render(<AntDesignForm />);
  
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Age')).toBeInTheDocument();
  expect(screen.getByLabelText('Date')).toBeInTheDocument();
  expect(screen.getByLabelText('Time')).toBeInTheDocument();
  expect(screen.getByText('Submit')).toBeInTheDocument();
});

// test('shows error messages for empty fields on submit', async () => {
//   const { getByText, findByText } = render(<AntDesignForm />);
//   const submitButton = getByText('Submit');

//   fireEvent.click(submitButton);
  
//   const nameError = await findByText('Please input your name!');
//   const ageError = await findByText('Please input your age!');
//   const dateError = await findByText('Please select a date!');
//   const timeError = await findByText('Please select a time!');
  
//   expect(nameError).toBeInTheDocument();
//   expect(ageError).toBeInTheDocument();
//   expect(dateError).toBeInTheDocument();
//   expect(timeError).toBeInTheDocument();
// });
