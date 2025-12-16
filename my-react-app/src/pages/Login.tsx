import { useState } from "react";
import AuthLayout from "../component/auth/authLayout";
import AuthCard from "../component/auth/authCard";
import AuthInput from "../component/auth/authInput";
import AuthActions from "../component/auth/authAction";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    console.log("Login:", { username, password });
  };

  return (
    <AuthLayout>
      <AuthCard title="登录页面">
        <AuthInput
          icon={<UserOutlined />}
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />

        <AuthInput
          icon={<LockOutlined />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />

        <div className="flex justify-between">

          <AuthActions>
            <Link to="/forgot">忘记密码?</Link>

          </AuthActions>
          <AuthActions>


            <Link to="/register">注册</Link>

          </AuthActions>
        </div>

        <button
          onClick={submit}
          className="w-full bg-primary text-white py-3 rounded-lg mt-4 hover:bg-primaryDark transition"
        >
          登录
        </button>
      </AuthCard>
    </AuthLayout>
  );
}
