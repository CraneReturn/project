import { Layout, Menu } from "antd";
import {
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { RootState } from '@/app/store';

const { Sider } = Layout;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
 const user = useSelector((state) => state?.auth?.user);

  const isAdmin = user?.role === "admin";

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={200}
      className="!bg-white"
    >
      {/* Logo */}
      <div className="h-12 flex items-center justify-center font-bold">
        {collapsed ? "CMS" : "后台管理"}
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: "/student/files",
            icon: <FileOutlined />,
            label: "文件管理",
          },
          {
            key: "/admin/students",
            icon: <TeamOutlined />,
            label: "学生管理",
            disabled: !isAdmin, // ⭐ 权限控制
          },
           {
            key: "/student/work",
            icon: <TeamOutlined />,
            label: "工作流",
            disabled: !isAdmin, // ⭐ 权限控制
          },
        ]}
      />
    </Sider>
  );
}
