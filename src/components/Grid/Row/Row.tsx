import React, { useState } from "react";
import { Row } from "antd";

interface Props {
  xs?: number | undefined;
  md?: number | undefined;
  xl?: number | undefined;
  children?: React.ReactNode | undefined;
}

const RowComponent: React.FC<Props> = ({ children }) => {
  return <Row>{children}</Row>;
};
export default RowComponent;
