import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { DataTable } from "../../components/dataTable";
import { EmployeeInterface } from "../../types/employees";
import { useEmplyees } from "../../utils/hooks/useEmployees";
import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Managment = () => {
  const { createEmployee } = useEmplyees();
  const navigate = useNavigate();
  const handleAddEMployee = async () => {
    //create and get the new employee id
    const employeeId = await createEmployee();
    //navigate to the new employee account
    navigate(`/management/${employeeId}`);
  };
  return (
    <Row gutter={[16, 16]}>
      <Col sm={24} md={24} lg={24}>
        <Card
          hoverable
          title={
            <React.Fragment>
              <span
                className="anticon anticon-google"
                style={{
                  position: "absolute",
                  left: 20,
                }}
              >
                <b>Management</b>
              </span>
              <span
                className="anticon anticon-google"
                style={{
                  position: "absolute",
                  right: 20,
                  top: 8,
                }}
              >
                <Button
                  shape={"round"}
                  onClick={handleAddEMployee}
                  icon={<UserAddOutlined />}
                >
                  Add
                </Button>
              </span>
            </React.Fragment>
          }
        >
          <EmployeesList />
        </Card>
      </Col>
    </Row>
  );
};

const EmployeesList = () => {
  const { employees, deleteEmployee } = useEmplyees();
  useEffect(() => {}, [employees]);
  const navigate = useNavigate();

  const handleOnEdit = (item: EmployeeInterface) => {
    navigate(`/management/${item._id}`);
  };

  const handleOnDelete = async (item: EmployeeInterface) => {
    const deleteResult = await deleteEmployee(item?._id);
    if (deleteResult) {
      console.log("[DELETE]", item._id, "deleted");
    } else {
      console.log("[DELETE]", item._id, "NOT deleted");
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filtered: true,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      align: "right",
      key: "actions",
      render: (item: EmployeeInterface) => (
        <React.Fragment>
          <Button
            onClick={() => handleOnEdit(item)}
            icon={<EditOutlined />}
            shape="circle"
            style={{ marginRight: 10 }}
          />
          <Button
            icon={<DeleteOutlined />}
            shape="circle"
            onClick={() => handleOnDelete(item)}
          />
        </React.Fragment>
      ),
    },
  ];
  return (
    <React.Fragment>
      <DataTable
        data={employees}
        filters={{}}
        columns={columns}
        id={"key"}
        title={
          <span
            className="anticon anticon-google"
            style={{
              position: "absolute",
              left: 20,
            }}
          >
            <b>Management</b>
          </span>
        }
      />
    </React.Fragment>
  );
};
