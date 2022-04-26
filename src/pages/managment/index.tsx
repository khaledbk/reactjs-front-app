import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { DataTable } from "../../components/dataTable";
import { EmployeeInterface } from "../../types/employees";
import { useEmplyees } from "../../utils/hooks/useEmployees";

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

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const EmployeesList = () => {
  const { employees } = useEmplyees();
  useEffect(() => {}, [employees]);
  console.log("==>", employees);
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
  ];
  return (
    <DataTable data={employees} filters={{}} columns={columns} id={"key"} />
  );
};
