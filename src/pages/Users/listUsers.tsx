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

const UserList: React.FC<NormalLoginProps & FormComponentProps> = (
  props: any
) => {
  const { getFieldDecorator, getFieldValue, resetFields, validateFields } =
    props.form;

  const handleSubmit = () => {
    console.log(getFieldValue("userName"));
    alert(getFieldValue("userName"));
  };

  const [data, setData] = useState();
  const [itemModal, setItemModal] = useState();
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);

  const moveToRegister = () => {
    window.location.href = "/users/register";
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const list = (params: any) => {
    return axios.get(`https://fakestoreapi.com/users/`, {
      params,
    });
  };

  async function deleteUser() {
    try {
      await axios.delete(`https://fakestoreapi.com/users/${itemModal}`);
      toast.success("Deletado com sucesso!");
      getData();
      setIsModalVisible(false);
    } catch (err) {}
  }

  const isMountedRef = useRef<any>(null);

  const getData = useCallback(
    async (offset = null) => {
      try {
        setLoading(true);

        const resList = await list({
          ...filters,
          offset,
        });

        setData(resList.data);
        console.log(resList.data);
      } catch (err) {}

      if (isMountedRef.current) {
        setLoading(false);
      }
    },
    [filters]
  );

  const handleSetFilter = (searchText: any) => {
    const currentFilters = getFieldValue(["searchText"]);

    setFilters({
      ...currentFilters,
      searchText: searchText,
    });
  };

  const DropdownMenu = useCallback((record: any) => {
    return (
      <Menu>
        <Menu.Item
          key="1"
          onClick={() => {
            setItemModal(record.id);
            showModal();
          }}
          style={{
            paddingLeft: 10,
          }}
        >
          Excluir
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => {
            window.location.href = `/users/${record.id}`;
          }}
          style={{
            paddingLeft: 10,
          }}
        >
          Editar
        </Menu.Item>
      </Menu>
    );
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nome completo",
      dataIndex: "name",
      key: "nn",
      render: (status: any) => (
        <span>
          <span>
            {status.firstname} {status.lastname}
          </span>
        </span>
      ),
    },
    {
      title: "Apelido",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Celular",
      dataIndex: "phone",
      key: "phone",
    },

    {
      dataIndex: "action",
      key: "action",
      width: "100px",
      render: (text: any, record: any) => (
        <Dropdown overlay={DropdownMenu(record)} trigger={["click"]}>
          <Button type="link" className="btn-action">
            <MdMoreVert size={24} />
          </Button>
        </Dropdown>
      ),
    },
  ];

  useEffect(() => {
    isMountedRef.current = true;
    getData();
    return () => {
      isMountedRef.current = false;
    };
  }, [getData, filters]);

  return (
    <React.Fragment>
      <Row>
        <Col xs={12} md={12} xl={12} style={{ marginLeft: 10, marginTop: 10 }}>
          <span style={{ color: "#242424", fontSize: 30, fontWeight: 500 }}>
            Usuários
          </span>
          <br />
          <span style={{ color: "#9B9B9B", fontSize: 14 }}>
            Aqui estão listados os nossos usuários
          </span>
        </Col>
        <Col
          xs={11}
          md={11}
          xl={11}
          style={{ justifyContent: "flex-end", display: "flex", marginTop: 30 }}
        >
          {" "}
          <Button
            onClick={moveToRegister}
            style={{
              borderRadius: 20,
            }}
            type="primary"
          >
            <PlusCircleOutlined />
            Adicionar
          </Button>
        </Col>
      </Row>

      <Table
        style={{ marginLeft: 10, marginRight: 10, marginTop: 50 }}
        dataSource={data}
        columns={columns}
        loading={loading}
      />
      <Modal
        width={500}
        style={{ justifyContent: "center" }}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            onClick={handleCancel}
            style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
          >
            Cancelar
          </Button>,

          <Button onClick={deleteUser} type="primary" style={{ color: "#FFF" }}>
            Excluir
          </Button>,
        ]}
      >
        <h2>
          {" "}
          <ExclamationCircleOutlined style={{ color: " #1972D1" }} />{" "}
          <strong> Tem certeza que deseja excluir? </strong>
        </h2>
      </Modal>
    </React.Fragment>
  );
};

const WrappedNormalLoginForm: any = Form.create()(UserList);

export default WrappedNormalLoginForm;
