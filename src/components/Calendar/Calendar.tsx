import React, { useState } from "react";
import { Calendar } from "antd";

interface Props {
  style?: React.CSSProperties;
}

const CalendarComponent: React.FC<Props> = ({ style }) => {
  return <Calendar style={style} />;
};
export default CalendarComponent;
