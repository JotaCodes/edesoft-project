import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { ToastStyles } from './Toast.styles';
// import 'react-toastify/dist/ReactToastify.css';

const ToastWrapper = ({ ...rest }) => {
  return (
    <div className="toast-wrapper">
      <ToastContainer
        position="top-right"
        newestOnTop
        autoClose={false}
        hideProgressBar
        closeOnClick
        pauseOnHover
        rtl={false}
        draggable
        {...rest}
      />
    </div>
  );
};

export const StyledToasts = styled(ToastWrapper)`
  ${ToastStyles}
`;

interface Props {
  children: React.ReactNode;
  type: 'error' | 'success' | 'warning';
}

export interface ToastProps {
  type: 'error' | 'success' | 'warning';
  message: string;
}

const Toast = ({ children, type, ...rest }: Props): React.ReactText => {
  /* type can be: error, success, warn and info */
  let config = {};
  if (type === 'error' || type === 'success' || type === 'warning') {
    config = {
      autoClose: 10860,
    };
  }

  return toast[type](children, { ...config, ...rest });
};

export default Toast;
export { Toast };
