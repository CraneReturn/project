import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

interface Props {
  title: string;
  onSubmit: (v: any) => void;
  submitText: string;
  extra?: React.ReactNode;
}

export default function AuthForm({ title, onSubmit, submitText, extra }: Props) {
  return (
    <div className="bg-white shadow-xl rounded-xl p-8">
      <h2 className="text-3xl font-semibold text-primary mb-8">{title}</h2>

      <Form layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            size="large"
          />
        </Form.Item>

        {extra}

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-4"
        >
          {submitText}
        </Button>
      </Form>
    </div>
  );
}
