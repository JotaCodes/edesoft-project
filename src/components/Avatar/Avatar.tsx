import React from "react";
import { Avatar } from "antd";

interface Props {
  size: number;
  icon: React.ReactNode;
}

const AvatarUser: React.FC<Props> = ({ size, icon }) => {
  return <Avatar size={size} icon={icon} />;
};
export default AvatarUser;
