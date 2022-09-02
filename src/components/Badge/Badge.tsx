import React from "react";
import { Badge } from "antd";

interface Props {
  count: number;
  children: React.ReactNode;
}

const BadgeUser: React.FC<Props> = ({ count, children }) => {
  return <Badge count={count}>{children}</Badge>;
};
export default BadgeUser;
