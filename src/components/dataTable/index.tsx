import { Space, Table, Input, Button } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

type DataTableProps = {
  data: any[];
  columns: any[];
  filters: any;
  id: string;
  title: any;
  pagination: any;
};

export interface ColumnInterface {
  title: string;
  dataIndex: string;
  key: string;
  width: string;
  filtred: boolean;
  boolean: () => React.FC;
}

export const DataTable = ({
  pagination,
  id,
  columns,
  data,
}: DataTableProps) => {
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
  return (
    <Table
      pagination={pagination}
      columns={columns}
      dataSource={data}
      rowKey="{record => record.key}"
    />
  );
};
