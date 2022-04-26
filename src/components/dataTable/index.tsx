import { Space, Table, Input, Button } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

type DataTableProps = {
  data: any[];
  columns: any[];
  filters: any;
  id: string;
};

export interface ColumnInterface {
  title: string;
  dataIndex: string;
  key: string;
  width: string;
  filtred: boolean;
}

export const DataTable = ({ id, columns, data }: DataTableProps) => {
  //console.log(data);
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
  //   const columns = [
  //     {
  //       title: "Name",
  //       dataIndex: "name",
  //       key: "name",
  //       width: "30%",
  //       // ...getColumnSearchProps("name"),
  //     },
  //     {
  //       title: "Age",
  //       dataIndex: "age",
  //       key: "age",
  //       width: "20%",
  //       //...getColumnSearchProps("age"),
  //     },
  //     {
  //       title: "Address",
  //       dataIndex: "address",
  //       key: "address",
  //       filterDropdown: ({
  //         setSelectedKeys,
  //         selectedKeys,
  //         confirm,
  //         clearFilters,
  //       }: any) =>
  //         getFilters(
  //           setSelectedKeys,
  //           selectedKeys,
  //           confirm,
  //           clearFilters,
  //           "address"
  //         ),
  //       //...getColumnSearchProps("address"),
  //       // sorter: (
  //       //   a: { address: string | any[] },
  //       //   b: { address: string | any[] }
  //       // ) => a.address.length - b.address.length,
  //       // sortDirections: ["descend", "ascend"],
  //     },
  //   ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="{record => record.key}"
    />
  );
};
