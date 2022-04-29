import React, { useState } from "react";
import { Form, Input, Button, message, Radio } from "antd";
import { useNavigate } from "react-router-dom";

import styles from "./index.less";

const Login: React.FC<any> = () => {
  const [date, setDate] = useState(null);
  const navigate = useNavigate();
  const toMain = (path: string) => {
    navigate("/home");
  };
  const onFinish = async (values: any) => {
    // const { data, code, message: messageText } = await getLoginApi(values);
    const data = { code: 1, messageText: "" };
    console.log("data: ", data);
    if (data.code === 1) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/home", { replace: true });
    } else {
      message.warning(data.messageText);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <Form
        name="basicLogin"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ env: "pro" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="环境"
          name="env"
          rules={[{ required: true, message: "请输入账号" }]}
        >
          <Radio.Group>
            <Radio value={"pro"}>正式</Radio>
            <Radio value={"test"}>测试</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="账号"
          name="username"
          rules={[
            { required: true, message: "请输入账号" },
            { max: 10, message: "账号不超过10位" },
          ]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            { max: 10, message: "密码长度不超过10位" },
          ]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
