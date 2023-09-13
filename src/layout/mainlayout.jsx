import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [heading, setHeading] = useState("Counter");

  const headingArray = ["Counter", "userList", "home"];
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[heading]}
          defaultSelectedKeys={[heading]}
          items={headingArray.map((menu, index) => {
            const key = index + 1;
            return {
              key,
              label: (
                <span
                  onClick={() => {
                    setHeading(menu);
                    navigate(`/${menu}`);
                  }}
                >
                  {menu}
                </span>
              ),
            };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design</Footer>
    </Layout>
  );
};

export default MainLayout;
