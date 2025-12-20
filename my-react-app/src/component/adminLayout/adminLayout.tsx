import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./sider/sidebar";

const { Content } = Layout;

export default function AdminLayout() {
  return (
    <Layout className="min-h-screen">
      <Sidebar />

      <Layout>
        <Content className="bg-gray-100 p-4">
          {/* 右侧内容 */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
