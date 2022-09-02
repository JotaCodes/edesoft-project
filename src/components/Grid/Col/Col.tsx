import React, { useState } from "react";
import { Col } from "antd";

interface Props {
  xs?: number | undefined;
  md?: number | undefined;
  xl?: number | undefined;
  children?: React.ReactNode | undefined;
}

const ColComponent: React.FC<Props> = ({ children, xs, md, xl }) => {
  return (
    <Col xs={xs} md={md} xl={xl}>
      {children}
    </Col>
  );
};
export default ColComponent;
