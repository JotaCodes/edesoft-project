import React, { useState } from "react";
import { Card } from "antd";

interface Props {
  style?: React.CSSProperties;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const CardComponent: React.FC<Props> = ({ style, title, children }) => {
  return (
    <Card style={style} title={title}>
      {children}
    </Card>
  );
};
export default CardComponent;
