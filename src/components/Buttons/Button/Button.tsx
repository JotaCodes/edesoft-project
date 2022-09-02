import React from "react";
import { Button } from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";
interface Props {
  type?:
    | "primary"
    | "link"
    | "default"
    | "ghost"
    | "dashed"
    | "danger"
    | undefined;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: () => void;
}

const SaveButton: React.FC<Props> = ({ type, style, children, onClick }) => {
  return (
    <Button type={type} style={style} onClick={onClick}>
      {children}
    </Button>
  );
};
export default SaveButton;
