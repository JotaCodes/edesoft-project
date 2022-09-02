import { AutoComplete } from "antd";
import React from "react";

interface Props {
  placeholder: string;
}

const SimpleInput: React.FC<Props> = ({ placeholder }) => {
  return <AutoComplete placeholder={placeholder} />;
};
export default SimpleInput;
