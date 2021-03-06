import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/user-auth-context.js";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Colors } from "../../Consts/colors.js";

const Login = () => {
  const { logIn } = useUserAuth();
  const [error, setError] = useState("");

  const onFinish = async (values) => {
    try {
      await logIn(values.email, values.password);
      navigate("/dashboard");
    } catch (err) {
      console.log("err.code :>> ", err.code);
      switch (err.code) {
        case "auth/wrong-password":
          console.log("Wrong password");
      }
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to Solnet</h1>
      <br />
      <Form
        name="normal_login"
        style={{ maxWidth: "300px", margin: "auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a href="">Forgot password</a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "80%", backgroundColor: Colors.BUTTON }}
          >
            Log in
          </Button>
          {error ? error : ""}
        </Form.Item>
      </Form>
      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
