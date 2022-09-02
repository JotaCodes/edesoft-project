import React from "react";
import { Checkbox, Row, Col } from "antd";

interface Props {
  children?: React.ReactNode;
  name: string;
  onClick: () => void;
  value: React.ReactNode;
  disabled: boolean;
}

const CheckBox: React.FC<Props> = ({
  children,
  name,
  onClick,
  value,
  disabled,
}) => {
  return (
    <Checkbox onClick={onClick} name={name} value={value} disabled={disabled}>
      {children}
    </Checkbox>
  );
};
export default CheckBox;
