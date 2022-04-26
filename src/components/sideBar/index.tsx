import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ApartmentOutlined,
  LoginOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../utils/hooks/useAuth";

type SideBarItem = {
  key: string | number;
  icon: React.ReactNode | null;
  label: string | React.ReactNode;
};

export const SideBar = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [items, setItems] = useState<SideBarItem[]>([]);
  const { currentUser, logout } = useAuth();

  const handleCollapse = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (currentUser) {
      setItems([
        {
          key: 0,
          icon: collapsed ? (
            <MenuUnfoldOutlined onClick={handleCollapse} />
          ) : (
            <MenuFoldOutlined onClick={handleCollapse} />
          ),
          label: <div onClick={handleCollapse}>Hi, {currentUser.name}</div>,
        },
        {
          key: 1,
          icon: <DashboardOutlined />,
          label: <Link to="/">Dashboard</Link>,
        },
        {
          key: 2,
          icon: <UserOutlined />,
          label: <Link to="/profile">Profile</Link>,
        },
        {
          key: 3,
          icon: <ApartmentOutlined />,
          label: <Link to="/managment">Managment</Link>,
        },
        {
          key: 4,
          icon: <LoginOutlined onClick={logout} />,
          label: (
            <Link to="/login" onClick={logout}>
              Logout
            </Link>
          ),
        },
      ]);
    } else {
      setItems([
        {
          key: 0,
          icon: collapsed ? (
            <MenuUnfoldOutlined onClick={handleCollapse} />
          ) : (
            <MenuFoldOutlined onClick={handleCollapse} />
          ),
          label: <div onClick={handleCollapse}>E. M. System</div>,
        },
        {
          key: 1,
          icon: <DashboardOutlined />,
          label: <Link to="/">Dashboard</Link>,
        },
        {
          key: 2,
          icon: <LoginOutlined />,
          label: <Link to="/login">Login</Link>,
        },
      ]);
    }
  }, [currentUser, collapsed]);

  return (
    <Sider trigger={null} collapsible collapsed={!collapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        items={items}
      />
      {/* {<div className="logo">E.M.S</div>} */}
    </Sider>
  );
};
