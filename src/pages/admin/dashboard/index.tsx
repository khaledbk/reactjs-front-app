import React from "react";
import { Card, Row, Col } from "antd";
import { UserInterface } from "../../../types/users";
import { EditOutlined } from "@ant-design/icons";

type DashboardProps = {
  currentUser: UserInterface;
};

export const Dashboard = ({ currentUser }: DashboardProps) => {
  return (
    <Row gutter={[16, 16]} justify="start">
      <Col sm={24} md={24} lg={24}>
        Welcome, {currentUser?.name} !
      </Col>
      <Col sm={24} md={12} lg={12}>
        <Card title="Dashboard">Dashboard</Card>
      </Col>
      <Col sm={24} md={12} lg={12}>
        <Card
          title="Profile"
          style={{ height: 200 }}
          actions={[<EditOutlined key="edit" />]}
        >
          Profile
        </Card>
      </Col>
      <Col sm={24} md={6} lg={6}>
        <Card title="Total Users">Users</Card>
      </Col>
      <Col sm={24} md={6} lg={6}>
        <Card title="Total Employees">Tot Emp</Card>
      </Col>
      <Col sm={24} md={12} lg={12}>
        <Card title="Recent Employee">Recent Emp</Card>
      </Col>
      <Col sm={24} md={24} lg={24}>
        <Card title="List">List Emp</Card>
      </Col>
    </Row>
  );
};
