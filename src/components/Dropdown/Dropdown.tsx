import { Dropdown } from "antd";

interface Props {
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  disabled?: boolean;
}

const Drop: React.FC<Props> = ({ overlay, children, disabled }) => {
  return (
    <Dropdown disabled={disabled} overlay={overlay}>
      {children}
    </Dropdown>
  );
};
export default Drop;
