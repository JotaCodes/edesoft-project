import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import ptBR from 'antd/es/locale/pt_BR';
import { ConfigProvider } from 'antd';
import Helmet from 'react-helmet';
import SiderEdesoft from "./components/EdesoftSider/Sider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <ConfigProvider locale={ptBR}>
    <Helmet titleTemplate="%s | Painel" />
    <SiderEdesoft />
    <ToastContainer />

  </ConfigProvider>
,
  document.getElementById('root')
);
