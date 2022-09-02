import React from "react";
import { Breadcrumb } from "antd";

interface Props {
  children?: React.ReactNode;
}

const Bread: React.FC<Props> = ({ children }) => {
  return <Breadcrumb >{children}</Breadcrumb>;
};
export default Bread;
