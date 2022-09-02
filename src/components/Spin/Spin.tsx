import React from "react";
import { Spin } from "antd";

interface Props {
  size?: "small" | "default" | "large" | undefined;
}

const SpinComponnent: React.FC<Props> = ({ size }) => {
  return <Spin size={size} />;
};
export default SpinComponnent;
