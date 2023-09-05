import React from "react";
import { Form, Input, DatePicker, TimePicker, Button } from "antd";

const AntDesignForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <Form name="basic" onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Please select a date!" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Time"
        name="time"
        rules={[{ required: true, message: "Please select a time!" }]}
      >
        <TimePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntDesignForm;
