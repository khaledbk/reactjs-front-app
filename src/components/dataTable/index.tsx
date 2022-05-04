import { Space, Table, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";
import { assign, map, get, unset } from "lodash";
import { useEmplyees } from "../../utils/hooks/useEmployees";

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
  const [tableFilter, setTableFilter] = useState({});
  const { handleSetFilter, refetchList } = useEmplyees();

  const handleSearch = () => {
    handleSetFilter(tableFilter);
    refetchList();
  };

  const handleReset = (clearFilters: () => void, dataIndex: string) => {
    clearFilters();
    setTableFilter(assign({}, unset(tableFilter, `${dataIndex}`)));
    handleSearch();
    refetchList();
  };

  const getColumnSearchProps = (dataIndex: string) => {
    return {
      filterDropdown: ({ clearFilters }: any) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={(node) => node}
            placeholder={`Search ${dataIndex}`}
            value={get(tableFilter, `${dataIndex}`, "")}
            onChange={(e) => {
              setTableFilter(
                assign({}, tableFilter, {
                  [`${dataIndex}`]: e.target.value,
                })
              );
            }}
            onPressEnter={() => handleSearch()}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch()}
              icon={<SearchOutlined />}
              size="small"
            >
              Search
            </Button>
            <Button
              onClick={() => handleReset(clearFilters, dataIndex)}
              size="small"
              icon={<ClearOutlined />}
            >
              Reset filters
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      render: (text: string) => <React.Fragment>{text}</React.Fragment>,
    };
  };
  const columnProps = map(columns, (col: any) => {
    if (col?.filtred)
      return assign({}, col, {
        ...getColumnSearchProps(col?.dataIndex),
      });
    return col;
  });
  useEffect(() => {
    handleSearch();
  }, [data, tableFilter]);
  return (
    <Table
      pagination={pagination}
      columns={columnProps}
      dataSource={data}
      rowKey="{record => record.key}"
    />
  );
};
