import React from "react";
import { Rate } from "antd";

interface Props {
  disabled: boolean;
  value?: number;
  character?: React.ReactNode;
}

const RateUser: React.FC<Props> = ({ disabled, value, character }) => {
  return <Rate value={value} disabled={disabled} character={character} />;
};
export default RateUser;
