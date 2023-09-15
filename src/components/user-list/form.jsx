import React, { useState } from "react";
import "./form.scss";

const AntDesignForm = ({ onUserAdd }) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const onFinish = (e) => {
    e.preventDefault();
    onUserAdd({ name: name, email: email });
    // setUserValues((prev) => [...prev, { name: name, email: email }]);
  };

  return (
    <form action="" onSubmit={onFinish} className="vertical-form">
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>{" "}
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AntDesignForm;
