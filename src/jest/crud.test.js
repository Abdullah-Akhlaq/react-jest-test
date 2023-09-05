// // tests/CRUDTable.test.js

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import CRUDTable from '../components/crudTable';


// test('renders table with initial data', () => {
//   const { getByText } = render(<CRUDTable />);
  
//   expect(getByText('Alice')).toBeInTheDocument();
//   expect(getByText('Bob')).toBeInTheDocument();
//   expect(getByText('Charlie')).toBeInTheDocument();
// });

// test('updates data when update button is clicked', () => {
//   const { getByText } = render(<CRUDTable />);
//   const updateButton = getByText('Update');

//   fireEvent.click(updateButton);

//   expect(getByText('Alice', { exact: false })).toBeInTheDocument(); // Name updated
// });

// test('deletes row when delete button is clicked', () => {
//   const { queryByText } = render(<CRUDTable />);
//   const deleteButton = queryByText('Delete');

//   fireEvent.click(deleteButton);

//   expect(queryByText('Alice')).toBeNull(); // Alice should be deleted
// });
