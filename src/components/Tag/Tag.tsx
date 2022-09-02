import React from "react";
import { Tag } from "antd";

interface Props {
  closable: boolean;
  onClick: () => void;
  onClose: () => void;
  children: React.ReactNode;
  color: string;
}

const TagComponent: React.FC<Props> = ({
  closable,
  onClose,
  onClick,
  children,
  color,
}) => {
  return (
    <Tag closable={closable} onClose={onClose} onClick={onClick} color={color}>
      {children}
    </Tag>
  );
};
export default TagComponent;
