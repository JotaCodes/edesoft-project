import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Layout, Menu, Avatar, Row, Col } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { TbUsers } from "react-icons/tb";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from "../../pages/Users/listUsers";
import UserRegister from "../../pages/Users/registerUsers";
import UserEdit from "../../pages/Users/editUsers";

export default function SiderEde() {
  const [collapsed, setCollapsed] = useState(true);
  const { SubMenu } = Menu;

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const Sider: any = Layout.Sider;
  const Header: any = Layout.Header;
  const Content: any = Layout.Content;
  const LayoutSider: any = Layout;

  //                "https://edesoft.com.br/wp-content/uploads/logo-edesoft-1-1.png"

  return (
    <Router>
      <LayoutSider>
        <Sider style={{ backgroundColor: "#fff" }}>
          <img
            width="120"
            src={
              "https://edesoft.com.br/wp-content/uploads/logo-edesoft-1-1.png"
            }
            style={{
              marginTop: 16,
              marginBottom: 20,
              marginLeft: 40,
              height: 80,
            }}
          />

          <Menu
            mode="inline"
            style={{ minHeight: "100vh" }}
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1">
              <TbUsers /> Usuários
              <Link to={`/`} />
            </Menu.Item>
          </Menu>
        </Sider>
        <LayoutSider className="site-layout">
          <Header
            className="site-layout-background"
            style={{ minHeigth: "1vh", backgroundColor: "#fff" }}
          ></Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              backgroundColor: "#fff",
            }}
          >
            <Row>
              <Route path="/" exact={true}>
                <UserList />
              </Route>
              <Route path="/users/register" exact={true}>
                <UserRegister />
              </Route>
              <Route path="/users/:id" exact={true}>
                <UserEdit />
              </Route>
            </Row>
          </Content>
        </LayoutSider>
      </LayoutSider>
    </Router>
  );
}
