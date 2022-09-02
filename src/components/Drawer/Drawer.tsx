import React, { useState } from "react";
import { Divider, Drawer } from "antd";

interface Props {
  children?: React.ReactNode;
  visibled?: boolean;
  width?: number;
  title?: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
}

const DrawerComponent: React.FC<Props> = ({
  visibled,
  children,
  width,
  title,
  placement,
}) => {
  return (
    <Drawer
      visible={visibled}
      width={width}
      title={title}
      placement={placement}
      closable={true}
    >
      {children}
    </Drawer>
  );
};
export default DrawerComponent;
