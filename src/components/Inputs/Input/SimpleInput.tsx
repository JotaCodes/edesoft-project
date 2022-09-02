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

const SimpleInput: React.FC<Props> = ({
  placeholder,
  children,
  name,
  width,
  height,
  allowClear,
}) => {
  return (
    <Input
      placeholder={placeholder}
      name={name}
      width={width}
      height={height}
      allowClear={allowClear}
    >
      {children}
    </Input>
  );
};
export default SimpleInput;
