import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormComponentProps } from "antd/lib/form/Form";
import { valueType } from "antd/lib/statistic/utils";
import React from "react";
const FormItem = Form.Item;
interface NormalLoginProps {
  option?: valueType;
}

const App: React.FC<NormalLoginProps & FormComponentProps> = (props: any) => {
  const { getFieldDecorator, getFieldValue } = props.form;

  const handleSubmit = () => {
    console.log(getFieldValue("userName"));
    alert(getFieldValue("userName"));
  };
  return <React.Fragment>a</React.Fragment>;
};

const WrappedNormalLoginForm: any = Form.create()(App);

export default WrappedNormalLoginForm;
