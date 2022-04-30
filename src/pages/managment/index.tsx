import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { DataTable } from "../../components/dataTable";
import { EmployeeInterface } from "../../types/employees";
import { useEmplyees } from "../../utils/hooks/useEmployees";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Managment = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col sm={24} md={24} lg={24}>
        Managment
      </Col>
      <Col sm={24} md={24} lg={24}>
        <Card hoverable>
          <EmployeesList />
        </Card>
      </Col>
    </Row>
  );
};

const EmployeesList = () => {
  const { employees } = useEmplyees();
  useEffect(() => {}, [employees]);
  const navigate = useNavigate();

  console.log("==>", employees);

  const handleOnEdit = (item: EmployeeInterface) => {
    console.log("[Edit Clicked]", item);
    navigate(`/management/${item._id}`);
  };

  const handleOnDelete = (item: EmployeeInterface) => {
    console.log("[Delete Clicked]", item);
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
      dataIndex: "",
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
    <DataTable data={employees} filters={{}} columns={columns} id={"key"} />
  );
};
