import { Card, Col, Row, Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
//import Highlighter from "react-highlight-words";
import React, { useRef, useState } from "react";

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
  const [searchText, setSerchText] = useState<string>("");
  const [searchedColumn, setSearchColumn] = useState<string>();
  const handleSearch = (
    selectedKeys: string,
    confirm: any,
    dataIndex: string
  ) => {
    confirm();
    setSerchText(selectedKeys[0]);
    setSearchColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSerchText("");
  };
  let searchInput: any;
  // const getColumnSearchProps = (dataIndex: string) => ({
  //   filterDropdown: ({
  //     setSelectedKeys,
  //     selectedKeys,
  //     confirm,
  //     clearFilters,
  //   }: any) => (
  //     <div style={{ padding: 8 }}>
  //       <Input
  //         ref={(node) => {
  //           searchInput = node;
  //         }}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={(e) =>
  //           setSelectedKeys(e.target.value ? [e.target.value] : [])
  //         }
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{ marginBottom: 8, display: "block" }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{ width: 90 }}
  //         >
  //           Search
  //         </Button>
  //         <Button
  //           onClick={() => handleReset(clearFilters)}
  //           size="small"
  //           style={{ width: 90 }}
  //         >
  //           Reset
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             confirm({ closeDropdown: false });
  //             setSerchText(selectedKeys[0]);
  //             setSearchColumn(dataIndex);
  //           }}
  //         >
  //           Filter
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered: any) => (
  //     <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  //   ),

  //   render: (text: string) =>
  //     searchedColumn === dataIndex ? searchText : text,
  // });

  const getFilters = (
    setSelectedKeys: (e: string[]) => void,
    selectedKeys: string,
    confirm: (options: any) => void,
    clearFilters: () => void,
    dataIndex: string
  ) => {
    return (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search Address`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSerchText(selectedKeys[0]);
              setSearchColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    );
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      // ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      //...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }: any) =>
        getFilters(
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
          "address"
        ),
      //...getColumnSearchProps("address"),
      // sorter: (
      //   a: { address: string | any[] },
      //   b: { address: string | any[] }
      // ) => a.address.length - b.address.length,
      // sortDirections: ["descend", "ascend"],
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};