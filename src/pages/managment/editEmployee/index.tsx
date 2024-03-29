import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeInterface } from "../../../types/employees";
import { Card, Row, Col, Image, Divider, Input, Button, message } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  PhoneOutlined,
  TeamOutlined,
  MailOutlined,
  PlusSquareOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Formik, FormikValues } from "formik";

import { isEmpty, get } from "lodash";
import { useEmplyees } from "../../../utils/hooks/useEmployees";

export const EditEmployee = () => {
  const { getEmployee, currentEmployee, updateEmployee } = useEmplyees();
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getEmployee(id);
    }
  }, [JSON.stringify(currentEmployee)]);

  const [showLoginError, setLoginError] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleValidate = (values: FormikValues) => {
    const errors: FormikValues = {};

    if (!values.email) {
      errors.email = "*Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Invalid email address";
    }

    if (!values.username) {
      errors.username = "*Required";
    }

    if (!values.name) {
      errors.name = "*Required";
    }

    if (!values.surname) {
      errors.surname = "*Required";
    }

    if (!values.title) {
      errors.title = "*Required";
    }

    if (!values.address) {
      errors.address = "*Required";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "*Required";
    }

    return errors;
  };
  const handleSubmitForm = async (values: EmployeeInterface): Promise<void> => {
    //console.log("[UPDATE]", values);
    setSubmitting(true);
    updateEmployee(values).then((res) => {
      setSubmitting(false);
      message.success("Employee is up to date");
    });
  };

  const handleBack = () => {
    navigate("/management");
  };

  if (currentEmployee === undefined) {
    return <React.Fragment>Loading</React.Fragment>;
  }
  return (
    <div>
      <Card
        hoverable
        title={
          <span
            className="anticon anticon-google"
            style={{
              position: "absolute",
              left: 20,
              marginBottom: 20,
            }}
          >
            <Button
              style={{ top: -2, marginRight: 20 }}
              type="link"
              icon={<ArrowLeftOutlined />}
              onClick={handleBack}
              shape="circle"
            />
            {currentEmployee?.name} {currentEmployee?.surname}
          </span>
        }
        bordered={true}
        style={{ width: "100%" }}
        headStyle={{ fontWeight: "bold" }}
      >
        <Formik
          initialValues={{
            _id: currentEmployee?._id,
            username: currentEmployee?.username,
            email: currentEmployee?.email,
            name: currentEmployee?.name,
            surname: currentEmployee?.surname,
            title: currentEmployee?.title,
            phoneNumber: currentEmployee?.phoneNumber,
            address: currentEmployee?.address,
          }}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        >
          {({ values, errors, handleChange, handleSubmit }) => {
            return (
              <>
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
                        {/* <Row justify="center" align="middle">
                          <Col xs={24} md={24} lg={24}>
                            <IdcardOutlined />
                          </Col>
                          <Col xs={24} md={24} lg={24}>
                            {values.address}
                          </Col>
                        </Row> */}
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
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Name"
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                        />
                        {errors.name ? (
                          <div
                            style={{
                              color: "red",
                              left: 10,
                              position: "absolute",
                              fontSize: "smaller",
                            }}
                          >
                            {errors.name}
                          </div>
                        ) : null}
                        <Divider />
                      </Col>
                      <Col xs={24} md={12} lg={12}>
                        <Input
                          id="surname"
                          name="surname"
                          size="large"
                          value={values.surname}
                          onChange={handleChange}
                          placeholder="Surname"
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                        />
                        {errors.surname ? (
                          <div
                            style={{
                              color: "red",
                              left: 10,
                              position: "absolute",
                              fontSize: "smaller",
                            }}
                          >
                            {errors.surname}
                          </div>
                        ) : null}
                        <Divider />
                      </Col>
                      <Col xs={24} md={12} lg={12}>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          size="large"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          prefix={
                            <PhoneOutlined className="site-form-item-icon" />
                          }
                        />
                        {errors.phoneNumber ? (
                          <div
                            style={{
                              color: "red",
                              left: 10,
                              position: "absolute",
                              fontSize: "smaller",
                            }}
                          >
                            {errors.phoneNumber}
                          </div>
                        ) : null}
                        <Divider />
                      </Col>
                      <Col xs={24} md={12} lg={12}>
                        <Input
                          id="email"
                          name="email"
                          size="large"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Email"
                          prefix={
                            <MailOutlined className="site-form-item-icon" />
                          }
                        />
                        {errors.email ? (
                          <div
                            style={{
                              color: "red",
                              left: 10,
                              position: "absolute",
                              fontSize: "smaller",
                            }}
                          >
                            {errors.email}
                          </div>
                        ) : null}
                        <Divider />
                      </Col>
                      <Col xs={24} md={12} lg={12}>
                        <Input
                          id="title"
                          name="title"
                          size="large"
                          value={values.title}
                          onChange={handleChange}
                          placeholder="Title"
                          prefix={
                            <TeamOutlined className="site-form-item-icon" />
                          }
                        />
                        {errors.title ? (
                          <div
                            style={{
                              color: "red",
                              left: 10,
                              position: "absolute",
                              fontSize: "smaller",
                            }}
                          >
                            {errors.title}
                          </div>
                        ) : null}
                        <Divider />
                      </Col>
                      <Col xs={24} md={12} lg={12}>
                        <Input
                          id="username"
                          name="username"
                          size="large"
                          value={values.username}
                          onChange={handleChange}
                          placeholder="Username"
                          prefix={
                            <TeamOutlined className="site-form-item-icon" />
                          }
                        />
                        {errors.username ? (
                          <div
                            style={{
                              color: "red",
                              left: 10,
                              position: "absolute",
                              fontSize: "smaller",
                            }}
                          >
                            {errors.username}
                          </div>
                        ) : null}
                        <Divider />
                      </Col>
                      <Col xs={24} md={24} lg={24}>
                        <Input
                          id="address"
                          name="address"
                          size="large"
                          value={values.address}
                          onChange={handleChange}
                          placeholder="Address"
                          prefix={
                            <IdcardOutlined className="site-form-item-icon" />
                          }
                        />
                        {errors.address ? (
                          <div
                            style={{
                              color: "red",
                              left: 10,
                              position: "absolute",
                              fontSize: "smaller",
                            }}
                          >
                            {errors.address}
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
                      onClick={() => handleSubmit()}
                      icon={<PlusSquareOutlined />}
                      size={"large"}
                    >
                      {currentEmployee?.name === "" ? "Save" : "Update"}
                    </Button>
                  </Col>
                </Row>
              </>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
};
