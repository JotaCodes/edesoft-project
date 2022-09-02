import React from "react";
import { Divider } from "antd";

interface Props {
  children?: React.ReactNode;
  type?: "horizontal" | "vertical";
}

const Divisor: React.FC<Props> = ({ type, children }) => {
  return <Divider type={type}>{children}</Divider>;
};
export default Divisor;
