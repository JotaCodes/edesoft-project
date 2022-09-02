/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';

const ToastMiddleware = () => (next: any) => (action: any) => {
  if (action?.payload?.toast) {
    let config = {};
    config = { hideProgressBar: false };

    if (
      action.payload.toast.type === 'error' ||
      action.payload.toast.type === 'success' ||
      action.payload.toast.type === 'warning'
    ) {
      config = { ...config, autoClose: 10860 };
    }

    const index = action.payload.toast.type as
      | 'success'
      | 'info'
      | 'error'
      | 'warning';

    toast[index](action.payload.toast.message, {
      ...config,
      ...action.payload.toast.options,
    });
  }
  return next(action);
};

export default ToastMiddleware;
export { ToastMiddleware };
