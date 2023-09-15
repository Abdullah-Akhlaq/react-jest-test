import React, { useState } from "react";
import AntDesignForm from "./form";
import Usertable from "./user-table.jsx";

const UserList = () => {
  const [userValues, setUserValues] = useState([]);

  const onUserAdd = (user) => {
    setUserValues([...user, user]);
  };
  return (
    <div>
      <h1>UserList</h1>

      <AntDesignForm onUserAdd={onUserAdd} />
      <Usertable userValues={userValues} />
    </div>
  );
};

export default UserList;
