import { Card, Col, Row, message } from "antd";
import React, { useEffect, useState } from "react";
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
import ConfrimationModal from "../../components/confirmationModal";

export const Managment = () => {
  const { createEmployee, employees } = useEmplyees();
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
                  type="primary"
                  icon={<UserAddOutlined />}
                >
                  <span className="anticon">Add</span>
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
  const { employees, deleteEmployee, refetchList } = useEmplyees();
  const [confirmationDelete, setConfirmationDelete] = useState<boolean>(false);
  const [toDelete, setTotDelete] = useState<EmployeeInterface>();
  useEffect(() => {
    console.log("This is the new list", employees);
    refetchList();
  }, [JSON.stringify(employees)]);
  const navigate = useNavigate();

  const handleOnEdit = (item: EmployeeInterface) => {
    navigate(`/management/${item._id}`);
  };

  const handleOnDelete = async () => {
    if (toDelete) {
      const deleteResult = await deleteEmployee(toDelete?._id);
      if (deleteResult) {
        refetchList();
        message.success("Employee deleted successfully!");
        //to refetch
        handleCloseConfirmationDelete();
        //console.log("[DELETE]", toDelete._id, "deleted");
      } else {
        //console.log("[DELETE]", toDelete._id, "NOT deleted");
        message.error("Cannot delete this employee!");
        handleCloseConfirmationDelete();
      }
    }
  };

  const handleConfirmDelete = (item: EmployeeInterface) => {
    setTotDelete(item);
    setConfirmationDelete(true);
  };

  const handleCloseConfirmationDelete = () => {
    setConfirmationDelete(false);
    setTotDelete(undefined);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filtred: true,
      responsive: ["md"],
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
      filtred: true,
      responsive: ["md"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filtred: true,
      responsive: ["md"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",

      responsive: ["md"],
    },
    {
      title: "Actions",
      dataIndex: "",
      align: "right",
      key: "actions",
      responsive: ["md"],
      render: (item: EmployeeInterface) => {
        return (
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
              onClick={() => handleConfirmDelete(item)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <ConfrimationModal
        content={`Do you want to delete "${toDelete?.name} ${toDelete?.surname}"`}
        isVisible={confirmationDelete}
        title="Employee Deletion"
        onConfirm={handleOnDelete}
        onCancel={handleCloseConfirmationDelete}
      />
      <DataTable
        data={employees}
        filters={{}}
        pagination={{
          position: ["bottomCenter"],
        }}
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
