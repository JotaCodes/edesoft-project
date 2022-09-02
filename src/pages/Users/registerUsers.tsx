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
const FormItem = Form.Item;
interface NormalLoginProps {
  option?: valueType;
}

const RegisterUsers: React.FC<NormalLoginProps & FormComponentProps> = (
  props: any
) => {
  const { getFieldDecorator, getFieldValue, resetFields, validateFields } =
    props.form;

  const saveRegister = () => {
    toast.success("Usuário salvo com sucesso!");
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

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
          Registrar Usuário
        </span>
        <br />
        <span style={{ color: "#9B9B9B", fontSize: 14 }}>
          Aqui você pode criar um NOVO usuário
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
          {getFieldDecorator("lastname", {
            rules: [
              {
                required: true,
              },
            ],
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
          })(
            <Input
              type="number"
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
        {" "}
        <Button size="large" onClick={() => backGo()}>
          Cancelar
        </Button>
        <Button size="large" type="primary" onClick={() => saveRegister()}>
          Salvar
        </Button>
      </Col>
    </React.Fragment>
  );
};

const WrappedNormalLoginForm: any = Form.create()(RegisterUsers);

export default WrappedNormalLoginForm;
