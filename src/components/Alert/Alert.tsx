import React from "react";
import { Alert } from "antd";

interface Props {
  size: number;
  type?: "success" | "info" | "warning" | "error" | undefined;
  message?: string;
}

const AlertComponnent: React.FC<Props> = ({ message, type }) => {
  return <Alert type={type} message={message} closable />;
};
export default AlertComponnent;
