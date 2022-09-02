import React from "react";
import { Switch } from "antd";

interface Props {
  disabled: boolean;
}

const RateUser: React.FC<Props> = ({ disabled }) => {
  return <Switch disabled={disabled} />;
};
export default RateUser;
