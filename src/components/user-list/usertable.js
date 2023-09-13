import React from "react";

const Usertable = ({ userValues }) => {
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {userValues.map((ele) => {
          return (
            <tr>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Usertable;
