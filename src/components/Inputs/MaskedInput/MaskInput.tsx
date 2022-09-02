import MaskedInput from "antd-mask-input";
import React from "react";

interface Props {
  placeholder: string;
  mask: string;
  children?: React.ReactNode;
  name: string;
  width: string;
  height: string;
}

const MaskInput: React.FC<Props> = ({
  placeholder,
  mask,
  children,
  name,
  width,
  height,
}) => {
  return (
    <MaskedInput
      placeholder={placeholder}
      mask={mask}
      name={name}
      width={width}
      height={height}
    >
      {children}
    </MaskedInput>
  );
};
export default MaskInput;
