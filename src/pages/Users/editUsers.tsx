import {
  Row,
  Col,
  Form,
  message,
  Divider,
  Radio,
  Input,
  Button,
  Layout,
  Menu,
  Icon,
  Select,
  InputNumber,
  Table,
  Tag,
  Dropdown,
  Modal,
} from "antd";
import {
  ReadOutlined,
  YoutubeOutlined,
  PlusCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { MdMoreVert } from "react-icons/md";
import { toast } from "react-toastify";
import { endianness } from "os";
import { valueType } from "antd/lib/statistic/utils";
import { FormComponentProps } from "antd/lib/form";
import { useParams } from "react-router-dom";
const FormItem = Form.Item;
interface NormalLoginProps {
  option?: valueType;
}

const EditUsers: React.FC<NormalLoginProps & FormComponentProps> = (
  props: any
) => {
  const { getFieldDecorator, getFieldValue, resetFields, validateFields } =
    props.form;
  const { id } = useParams<any>();
  const [data, setData] = useState<any>({
    email: "John@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
      firstname: "John",
      lastname: "Doe",
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "1-570-236-7033",
  });

  const saveEdit = () => {
    toast.success("Usuário editado com sucesso!");
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/users/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const backGo = () => {
    toast.info("Voltando...");
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  return (
    <React.Fragment>
      <Col xs={24} md={24} xl={24} style={{ marginLeft: 10, marginTop: 10 }}>
        <span style={{ color: "#242424", fontSize: 30, fontWeight: 500 }}>
          {" "}
          Editar Usuário
        </span>
        <br />
        <span style={{ color: "#9B9B9B", fontSize: 14 }}>
          Aqui você pode editar um usuário
        </span>
      </Col>

      <Col xs={24} md={24} xl={24}></Col>

      <Col xs={8} md={8} xl={8}>
        <FormItem label="Email:">
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.email,
          })(
            <Input
              placeholder="Exemplo: joaomarcelinodev@gmail.com"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>
      <Col xs={8} md={8} xl={8}>
        <FormItem label="Apelido:">
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.username,
          })(
            <Input
              placeholder="Exemplo: JoaoCodes"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>
      <Col xs={8} md={8} xl={8}>
        <FormItem label="Senha:">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.password,
          })(
            <Input.Password
              placeholder="Coloque uma senha segura"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>
      <div style={{ marginTop: 15 }}></div>
      <Col xs={8} md={8} xl={8}>
        <FormItem label="Primeiro nome:">
          {getFieldDecorator("firstname", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.name.firstname,
          })(
            <Input
              placeholder="Exemplo: Joao"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>
      <Col xs={8} md={8} xl={8}>
        <FormItem label="Segundo nome:">
          {getFieldDecorator("lastname", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.name.lastname,
          })(
            <Input
              placeholder="Coloque uma senha segura"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>

      <Col xs={8} md={8} xl={8}>
        <FormItem label="Cidade:">
          {getFieldDecorator("city", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.address.city,
          })(
            <Input
              placeholder="Insira sua cidade"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>
      <Col xs={8} md={8} xl={8}>
        <FormItem label="Rua:">
          {getFieldDecorator("street", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.address.street,
          })(
            <Input
              placeholder="Nome da rua"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>

      <Col xs={8} md={8} xl={8}>
        <FormItem label="Numero da casa:">
          {getFieldDecorator("number", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.address.number,
          })(
            <Input
              type="number"
              placeholder="Insira o numero da casa"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>
      <Col xs={8} md={8} xl={8}>
        <FormItem label="CEP:">
          {getFieldDecorator("zipcode", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.address.zipcode,
          })(
            <Input
              placeholder="Insira seu cep"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>

      <Col xs={8} md={8} xl={8}>
        <FormItem label="Celular:">
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: data.phone,
          })(
            <Input
              placeholder="Insira o seu celular"
              size="large"
              style={{ display: "flex" }}
            />
          )}
        </FormItem>
      </Col>
      <Col xs={24} md={24} xl={24}></Col>
      <Col
        xs={24}
        md={24}
        xl={24}
        style={{ justifyContent: "flex-end", display: "flex" }}
      >
        <Button size="large" onClick={() => backGo()}>
          Cancelar
        </Button>
        <Button
          size="large"
          type="primary"
          onClick={() => saveEdit()}
          style={{ marginLeft: 5 }}
        >
          Salvar
        </Button>
      </Col>
    </React.Fragment>
  );
};

const WrappedNormalLoginForm: any = Form.create()(EditUsers);

export default WrappedNormalLoginForm;
