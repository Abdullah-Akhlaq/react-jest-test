import React, { useState } from "react";
import "./form.scss";

const AntDesignForm = ({ setUserValues }) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const onFinish = (e) => {
    e.preventDefault();
    setUserValues((prev) => [...prev, { name: name, email: email }]);
  };

  return (
    <form action="" onSubmit={onFinish} className="vertical-form">
      <div className="form-field">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-field">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AntDesignForm;
