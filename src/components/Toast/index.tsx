import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastSucess = (msg: string) => {
  return toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const ToastError = (msg: string) => {
  return toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};
export const ToastInfo = (msg: string) => {
  return toast.info(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
