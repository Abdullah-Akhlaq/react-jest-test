import React, { useState } from "react";
import { Form, Input, DatePicker, TimePicker, Button } from "antd";

const AntDesignForm = () => {
 

  const [name,setName]=useState('');

  const [email,setEmail]=useState('');



  const onFinish = (values) => {
    console.log("Received values:", values);
  };


  return (
    <form action="" onSubmit={onFinish}>
      <label >Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <label >Email</label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />


    </form>
  );
};

export default AntDesignForm;
