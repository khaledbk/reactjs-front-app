import React, { useState } from "react";
import { Card, Row, Col, Image, Divider, Input, Button, Select } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  PhoneOutlined,
  TeamOutlined,
  PrinterOutlined,
  MailOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { useFormik } from "formik";

import { isEmpty, get } from "lodash";
import { useAuth } from "../../../utils/hooks/useAuth";

export const Profile = () => {
  const { currentUser } = useAuth();
  const [showLoginError, setLoginError] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const handleValidate = () => {};
  const handleSubmitForm = () => {};
  const formikHook = useFormik({
    initialValues: {
      username: currentUser?.username,
      email: currentUser?.email,
      name: currentUser?.name,
      surname: currentUser?.surname,
      title: currentUser?.title,
      phoneNumber: currentUser?.phoneNumber,
      address: currentUser?.address,
    },
    validate: handleValidate,
    onSubmit: handleSubmitForm,
  });
  return (
    <div>
      <Card
        hoverable
        title={<span style={{ position: "absolute", left: 20 }}>Profile</span>}
        bordered={true}
        style={{ width: "100%" }}
        headStyle={{ fontWeight: "bold" }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={6} lg={6}>
            <Row justify="center" align="top">
              <Col>
                <Image
                  //width={'150%'}
                  src={
                    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  }
                />
                <Row justify="center" align="middle">
                  <Col xs={24} md={24} lg={24}>
                    <IdcardOutlined />
                  </Col>
                  <Col xs={24} md={24} lg={24}>
                    {formikHook.values.address}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={18} lg={18}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} lg={12}>
                <Input
                  id="name"
                  name="name"
                  size="large"
                  value={formikHook.values.name}
                  onChange={formikHook.handleChange}
                  placeholder="Name"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
                {formikHook.errors.name ? (
                  <div className="formik-error">{formikHook.errors.name}</div>
                ) : null}
                <Divider />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Input
                  id="surname"
                  name="surname"
                  size="large"
                  value={formikHook.values.surname}
                  onChange={formikHook.handleChange}
                  placeholder="Surname"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
                {formikHook.errors.surname ? (
                  <div className="formik-error">
                    {formikHook.errors.surname}
                  </div>
                ) : null}
                <Divider />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  size="large"
                  value={formikHook.values.phoneNumber}
                  onChange={formikHook.handleChange}
                  placeholder="Phone Number"
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                />
                {formikHook.errors.phoneNumber ? (
                  <div className="formik-error">
                    {formikHook.errors.phoneNumber}
                  </div>
                ) : null}
                <Divider />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Input
                  id="email"
                  name="email"
                  size="large"
                  value={formikHook.values.email}
                  onChange={formikHook.handleChange}
                  placeholder="Email"
                  prefix={<MailOutlined className="site-form-item-icon" />}
                />
                {formikHook.errors.email ? (
                  <div className="formik-error">{formikHook.errors.email}</div>
                ) : null}
                <Divider />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Input
                  id="title"
                  name="title"
                  size="large"
                  //disabled={
                  //  !isEmpty(get(props, "currentClient.userName", false))
                  // }
                  value={formikHook.values.title}
                  onChange={formikHook.handleChange}
                  placeholder="Title"
                  prefix={<TeamOutlined className="site-form-item-icon" />}
                />
                {formikHook.errors.title ? (
                  <div className="formik-error">{formikHook.errors.title}</div>
                ) : null}
                <Divider />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Input
                  id="username"
                  name="username"
                  size="large"
                  //disabled={
                  //  !isEmpty(get(props, "currentClient.userName", false))
                  // }
                  value={formikHook.values.username}
                  onChange={formikHook.handleChange}
                  placeholder="Username"
                  prefix={<TeamOutlined className="site-form-item-icon" />}
                />
                {formikHook.errors.username ? (
                  <div className="formik-error">
                    {formikHook.errors.username}
                  </div>
                ) : null}
                <Divider />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Button
              type="primary"
              disabled={submitting}
              className="login-form-button"
              htmlType="submit"
              loading={submitting}
              icon={<PlusSquareOutlined />}
              size={"large"}
            >
              Update
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
