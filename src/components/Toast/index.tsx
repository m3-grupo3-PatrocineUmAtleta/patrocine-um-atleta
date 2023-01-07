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

// const ToastPromise = (msg: string) => {
//   return toast.promise(func, {
//     loading: "Aguarde...",
//     success: <b>Settings saved!</b>,
//     error: <b>Could not save.</b>,
//   });
// };
