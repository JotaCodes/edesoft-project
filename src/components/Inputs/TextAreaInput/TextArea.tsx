import { Input } from "antd";
import React from "react";

interface Props {
  placeholder: string;
  name: string;
  rows?: number;
}

const Text: React.FC<Props> = ({ placeholder, name, rows }) => {
  return <Input.TextArea placeholder={placeholder} name={name} rows={rows} />;
};
export default Text;
