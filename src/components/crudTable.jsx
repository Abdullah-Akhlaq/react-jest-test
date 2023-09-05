// src/CRUDTable.js

import React, { useState } from "react";

function CRUDTable() {
  const [data, setData] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ]);

  const addRow = (newRow) => {
    setData([...data, newRow]);
  };

  const updateRow = (id, updatedRow) => {
    const updatedData = data.map((row) => (row.id === id ? updatedRow : row));
    setData(updatedData);
  };

  const deleteRow = (id) => {
    const filteredData = data.filter((row) => row.id !== id);
    setData(filteredData);
  };

  return (
    <div>
      <button onClick={() => addRow({ id: data.length + 1, name: "ABDULLAH" })}>
        ADD
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>
                <button
                  onClick={() =>
                    updateRow(row.id, { ...row, age: row.age + 1 })
                  }
                >
                  Update
                </button>
                <button onClick={() => deleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CRUDTable;
