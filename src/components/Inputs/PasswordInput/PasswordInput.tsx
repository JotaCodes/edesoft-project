import { Input } from "antd";
import React from "react";

interface Props {
  placeholder: string;
  children?: React.ReactNode;
  name: string;
  width: string;
  height: string;
  allowClear: boolean;
}

const PasswordInput: React.FC<Props> = ({
  placeholder,
  children,
  name,
  width,
  height,
  allowClear,
}) => {
  return (
    <Input.Password
      placeholder={placeholder}
      name={name}
      width={width}
      height={height}
      allowClear={allowClear}
    >
      {children}
    </Input.Password>
  );
};
export default PasswordInput;
