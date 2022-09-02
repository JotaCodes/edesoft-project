import React from "react";
import { Select } from "antd";

interface Props {
  children?: React.ReactNode;
  size?: "small" | "default" | "large" | undefined;
  style?: React.CSSProperties | undefined;
  placeholder?: React.ReactNode | undefined;
}

const SelectComponnent: React.FC<Props> = ({
  children,
  size,
  style,
  placeholder,
}) => {
  return (
    <Select size={size} style={style} placeholder={placeholder}>
      {children}
    </Select>
  );
};
export default SelectComponnent;
