import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";
import get from "lodash/get";
import { Provider } from "../../types/users";
import { Row, Col, Card, Input, Divider, Button, Alert } from "antd";
import { FormikValues, useFormik } from "formik";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
export const Login = () => {
  const [showLoginError, setLoginError] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  let navigate = useNavigate();
  let location = useLocation();
  let { loginWithPassword } = useAuth();

  let from = get(location, "state.from.pathname", "/"); //location?.state?.from?.pathname || "/";

  const handleSubmitForm = async ({ email, password }: FormikValues) => {
    let data = {
      username: email,
      provider: {
        provider: Provider.PASSWORD,
        data: password,
      },
    };
    await loginWithPassword(data);
    navigate(from, { replace: true });
  };

  const handleValidate = () => {};

  const formikHook = useFormik({
    initialValues: { email: "", password: "" },
    validate: handleValidate,
    onSubmit: handleSubmitForm,
  });

  const handleLoginWithGoogle = () => {
    console.log("To log in with google");
  };
  return (
    <React.Fragment>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100%", minWidth: "50vw" }}
      >
        <Col xs={24} md={12} lg={8}>
          <Card>
            <form onSubmit={formikHook.handleSubmit}>
              <Input
                id="email"
                name="email"
                size="large"
                onChange={formikHook.handleChange}
                placeholder="Email"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
              {formikHook.errors.email ? (
                <div className="formik-error">{formikHook.errors.email}</div>
              ) : null}
              <Divider />
              <Input.Password
                size="large"
                id="password"
                name="password"
                onChange={formikHook.handleChange}
                placeholder="Password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              {formikHook.errors.password ? (
                <div className="formik-error">{formikHook.errors.password}</div>
              ) : null}
              {showLoginError && (
                <>
                  <Divider />
                  <Alert
                    message="Erreur"
                    description="Error with your Email / Password. Please try again."
                    type="error"
                    showIcon
                  />
                </>
              )}
              <Divider />
              <Row justify="end" gutter={[0, 16]}>
                <Col xs={24} md={24} lg={24}>
                  <Button
                    disabled={submitting}
                    className="login-form-button"
                    htmlType="submit"
                    loading={submitting}
                    icon={<UserOutlined />}
                    style={{ width: "100%" }}
                    size={"large"}
                    //shape="round"
                  >
                    <span className="anticon anticon-google">Login</span>
                  </Button>
                </Col>
                {/* <Col xs={24} md={24} lg={24}>
                Or connect using
              </Col> */}
              </Row>
            </form>
            <Divider />
            <Row justify="end" gutter={[0, 16]}>
              <Col xs={24} md={24} lg={24}>
                <Button
                  disabled={submitting}
                  className="login-form-button"
                  htmlType="submit"
                  shape="round"
                  block
                  //style={{ width: "100%" }}
                  loading={submitting}
                  onClick={handleLoginWithGoogle}
                  icon={<GoogleOutlined />}
                  size={"large"}
                >
                  <span className="anticon anticon-google">Google</span>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
