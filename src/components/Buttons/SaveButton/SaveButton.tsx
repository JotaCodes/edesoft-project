import React from "react";
import { Button } from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";
interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: () => void;
}

const SaveButton: React.FC<Props> = ({ style, children, onClick }) => {
  return (
    <Button type="primary" style={style} onClick={onClick}>
      <AiOutlineCheckCircle size={12} /> {children}
    </Button>
  );
};
export default SaveButton;
