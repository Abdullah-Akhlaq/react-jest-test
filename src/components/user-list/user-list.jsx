import React, { useState } from "react";
import AntDesignForm from "./form";
import Usertable from "./usertable";

const UserList = () => {
  const [userValues, setUserValues] = useState([]);
  return (
    <div>
      <h1>UserList</h1>

      <AntDesignForm setUserValues={setUserValues} />
      <Usertable userValues={userValues} />
    </div> 
  );
};

export default UserList;
