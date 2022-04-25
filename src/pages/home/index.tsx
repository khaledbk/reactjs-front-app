import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";
import { Card, Button, Row, Col, Typography } from "antd";
import { Dashboard } from "../admin/dashboard";
import Logo from "../../assets/logo.svg";
import { Image } from "react-bootstrap";
import { DownloadOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export const Home = () => {
  const { currentUser, logout } = useAuth();
  return (
    <React.Fragment>
      {currentUser ? <Dashboard currentUser={currentUser} /> : <Welcome />}
    </React.Fragment>
  );
};

const Welcome = () => {
  return (
    <Row align="stretch">
      <Col xs={24} md={24} lg={24}>
        <Card
          hoverable
          title={<h2>Employee Managment System</h2>}
          style={{ height: "100%" }}
        >
          <Row gutter={[16, 16]} align="stretch">
            <Col xs={24} md={24} lg={24}>
              <Paragraph>
                <Typography.Text>
                  A system to manage employee data for you!
                </Typography.Text>
              </Paragraph>
            </Col>
            <Col xs={24} md={24} lg={24}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12} lg={12}>
                  <ul style={{ textAlign: "justify" }}>
                    <li>Login to system as admin</li>
                    <li>List and filter employee data</li>
                    <li>Add new employee data</li>
                    <li>Edit employee data</li>
                    <li>Delete employee data</li>
                  </ul>
                </Col>
                <Col xs={24} md={12} lg={12}>
                  users.json
                  <br />
                  <Button type="link" shape="round" icon={<DownloadOutlined />}>
                    <a href="./users.json" download>
                      Download
                    </a>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={24} lg={24}>
              <Image src={Logo} />
            </Col>
            <Col xs={24} md={24} lg={24}>
              <Button size="large" style={{ minWidth: 200 }}>
                <Link to={"/login"}>Login</Link>
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
