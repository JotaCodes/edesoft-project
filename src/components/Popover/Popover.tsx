import React from "react";
import { Popover } from "antd";

interface Props {
  count: number;
  children: React.ReactNode;
  content: React.ReactNode;
}

const Pop: React.FC<Props> = ({ count, children }) => {
  return <Popover content={count}>{children}</Popover>;
};
export default Pop;
