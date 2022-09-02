import React from "react";
import { Table } from "antd";
import { ColumnProps } from "antd/lib/table";

interface Props {
  data?: React.ReactNode[];
  columns?: ColumnProps<React.ReactNode>[] | undefined;
}

const TableComponent: React.FC<Props> = ({ data, columns }) => {
  return <Table dataSource={data} columns={columns} />;
};
export default TableComponent;
