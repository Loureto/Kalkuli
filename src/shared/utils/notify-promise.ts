import { toast, ToastPromiseParams } from "react-toastify";

type NotifyPromiseParams = ToastPromiseParams & {
  promise: Promise<any>;
};

export const notifyPromise = (params: NotifyPromiseParams) => {
  toast.promise(
    params.promise,
    {
      pending: params.pending ?? "Aguarde...",
      success: params.success ?? "Ação concluida!",
      error: params.error ?? "Ops! Algo deu errado",
    },
    {
      toastId: 1,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );
};
